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
    keyword: ''
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

  // 清空筛选
  function clearFilters() {
    filters.value = {
      status: '',
      priority: '',
      responsible: '',
      area: '',
      category: '',
      keyword: ''
    }
  }

  // 筛选后的项目列表
  const filteredProjects = computed(() => {
    return projects.value.filter(p => {
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

  // 统计数据（用于看板）
  const stats = computed(() => {
    const total = projects.value.length
    const completed = projects.value.filter(p => p.status === '已完成').length
    const highPriority = projects.value.filter(p => p.priority === '高' && p.status !== '已完成').length
    const needCoordinate = projects.value.filter(p => p.status === '有问题需协调').length

    const byStatus = {}
    projects.value.forEach(p => {
      byStatus[p.status] = (byStatus[p.status] || 0) + 1
    })

    const byResponsible = {}
    projects.value.forEach(p => {
      byResponsible[p.responsible] = (byResponsible[p.responsible] || 0) + 1
    })

    const byArea = {}
    projects.value.forEach(p => {
      byArea[p.area] = (byArea[p.area] || 0) + 1
    })

    return { total, completed, highPriority, needCoordinate, byStatus, byResponsible, byArea }
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