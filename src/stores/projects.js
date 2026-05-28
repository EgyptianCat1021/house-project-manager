import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { subscribeProjects } from '../firebase/projects.js'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([])
  const loading = ref(false)
  const error = ref(null)
  let unsubscribe = null

  // 筛选条件
  const filters = ref({
    status: '',
    priority: '',
    responsible: '',
    area: '',
    category: '',
    keyword: '',
    hideCompleted: true
  })

  // 开始实时监听
  function startListening() {
    loading.value = true
    unsubscribe = subscribeProjects((data) => {
      projects.value = data
      loading.value = false
    })
  }

  // 停止监听
  function stopListening() {
    if (unsubscribe) {
      unsubscribe()
      unsubscribe = null
    }
  }

  // 设置筛选条件
  function setFilter(key, value) {
    filters.value[key] = value
  }

  // 清空筛选（保留 hideCompleted 状态）
  function clearFilters() {
    const hideCompleted = filters.value.hideCompleted
    filters.value = {
      status: '',
      priority: '',
      responsible: '',
      area: '',
      category: '',
      keyword: '',
      hideCompleted
    }
  }

  // 筛选后的项目列表
  const filteredProjects = computed(() => {
    return projects.value.filter(p => {
      // 隐藏已完成逻辑：
      // 如果 hideCompleted=true，且用户没有主动选"已完成"状态，则隐藏
      if (filters.value.hideCompleted && filters.value.status !== '已完成' && p.status === '已完成') return false
      if (filters.value.status && p.status !== filters.value.status) return false
      if (filters.value.priority && p.priority !== filters.value.priority) return false
      if (filters.value.responsible && p.responsible !== filters.value.responsible) return false
      if (filters.value.area && p.area !== filters.value.area) return false
      if (filters.value.category && p.category !== filters.value.category) return false
      if (filters.value.keyword) {
        const kw = filters.value.keyword.toLowerCase()
        const searchIn = [p.name, p.area, p.category, p.nextAction, p.notes]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        if (!searchIn.includes(kw)) return false
      }
      return true
    })
  })

  // 本周截止判断
  function getDueThisWeek(projectList) {
    try {
      const now = new Date()
      const startOfWeek = new Date(now)
      startOfWeek.setHours(0, 0, 0, 0)
      startOfWeek.setDate(now.getDate() - now.getDay() + 1)
      const endOfWeek = new Date(startOfWeek)
      endOfWeek.setDate(startOfWeek.getDate() + 6)
      endOfWeek.setHours(23, 59, 59, 999)

      return projectList.filter(p => {
        if (!p.plannedDate) return false
        try {
          const d = new Date(p.plannedDate)
          if (isNaN(d.getTime())) return false
          return d >= startOfWeek && d <= endOfWeek && p.status !== '已完成'
        } catch {
          return false
        }
      })
    } catch {
      return []
    }
  }

  // 统计数据（始终基于全量数据，不受 hideCompleted 影响）
  const stats = computed(() => {
    const all = projects.value
    const unfinished = all.filter(p => p.status !== '已完成')
    const completed = all.filter(p => p.status === '已完成')

    const byResponsible = {}
    unfinished.forEach(p => {
      if (p.responsible) {
        byResponsible[p.responsible] = (byResponsible[p.responsible] || 0) + 1
      }
    })

    const byArea = {}
    unfinished.forEach(p => {
      if (p.area) {
        byArea[p.area] = (byArea[p.area] || 0) + 1
      }
    })

    const dueThisWeekList = getDueThisWeek(all)

    // 逾期：plannedDate < 今天，且未完成
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const overdueList = unfinished.filter(p => {
      if (!p.plannedDate) return false
      try {
        const d = new Date(p.plannedDate)
        if (isNaN(d.getTime())) return false
        return d < today
      } catch { return false }
    })

    // 高优先级未设日期：priority=高，无 plannedDate，且未完成
    const noPlanDateList = unfinished.filter(p =>
      p.priority === '高' && !p.plannedDate
    )

    return {
      totalProjects: all.length,
      completedCount: completed.length,
      unfinishedCount: unfinished.length,
      highPriorityUnfinished: unfinished.filter(p => p.priority === '高').length,
      pendingMeasurement: all.filter(p => p.status === '待测量/确认').length,
      pendingPurchase: all.filter(p => p.status === '待采购').length,
      pendingConstruction: all.filter(p => p.status === '待施工').length,
      pendingAcceptance: all.filter(p => p.status === '待验收').length,
      issueCount: all.filter(p => p.status === '有问题需协调').length,
      dueThisWeek: dueThisWeekList.length,
      dueThisWeekList,
      overdueCount: overdueList.length,
      overdueList,
      noPlanDateCount: noPlanDateList.length,
      noPlanDateList,
      byResponsible,
      byArea
    }
  })

  return {
    projects,
    loading,
    error,
    filters,
    filteredProjects,
    stats,
    startListening,
    stopListening,
    setFilter,
    clearFilters
  }
})
