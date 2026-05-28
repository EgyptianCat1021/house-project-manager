<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <button @click="$router.push('/')" class="text-gray-400 hover:text-gray-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 class="font-semibold text-gray-900">项目清单</h1>
          <span class="text-sm text-gray-400">{{ displayedProjects.length }} 项</span>
        </div>
        <button @click="$router.push('/projects/add')" class="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
          <span>+</span> 新增
        </button>
      </div>
    </header>

    <div class="bg-white border-b border-gray-100">
      <div class="max-w-5xl mx-auto px-4 py-3 flex flex-wrap gap-2">
        <input v-model="keyword" @input="store.setFilter('keyword', keyword)" type="text" placeholder="搜索项目名称..." class="flex-1 min-w-[140px] px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" />
        <select v-model="filterStatus" @change="store.setFilter('status', filterStatus)" class="px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white">
          <option value="">全部状态</option>
          <option v-for="s in STATUS_OPTIONS" :key="s" :value="s">{{ s }}</option>
        </select>
        <select v-model="filterPriority" @change="store.setFilter('priority', filterPriority)" class="px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white">
          <option value="">全部优先级</option>
          <option v-for="p in PRIORITY_OPTIONS" :key="p" :value="p">{{ p }}</option>
        </select>
        <select v-model="filterResponsible" @change="store.setFilter('responsible', filterResponsible)" class="px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white">
          <option value="">全部责任方</option>
          <option v-for="r in RESPONSIBLE_OPTIONS" :key="r" :value="r">{{ r }}</option>
        </select>
        <select v-model="filterArea" @change="store.setFilter('area', filterArea)" class="px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white">
          <option value="">全部区域</option>
          <option v-for="a in AREA_OPTIONS" :key="a" :value="a">{{ a }}</option>
        </select>
        <select v-model="filterCategory" @change="store.setFilter('category', filterCategory)" class="px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white">
          <option value="">全部类型</option>
          <option v-for="c in CATEGORY_OPTIONS" :key="c" :value="c">{{ c }}</option>
        </select>
        <button v-if="hasFilters" @click="clearFilters" class="px-2 py-1.5 text-sm text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg">清空</button>
      </div>

      <!-- 排序 + 特殊筛选标签 + 显示已完成开关 -->
      <div class="max-w-5xl mx-auto px-4 pb-3 flex flex-wrap items-center gap-2">
        <!-- 排序下拉 -->
        <div class="flex items-center gap-1.5">
          <span class="text-xs text-gray-400 shrink-0">排序：</span>
          <select v-model="sortBy" class="px-2 py-1 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white">
            <option v-for="opt in sortOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
          </select>
        </div>

        <!-- 特殊筛选标签 -->
        <template v-if="activeFilter">
          <span class="text-xs px-2 py-1 rounded-full font-medium"
            :class="{
              'bg-red-100 text-red-700': activeFilter === 'overdue',
              'bg-orange-100 text-orange-700': activeFilter === 'dueThisWeek',
              'bg-yellow-100 text-yellow-700': activeFilter === 'noPlanDate'
            }">
            {{ activeFilterLabel }}
          </span>
          <button @click="clearSpecialFilter" class="text-xs text-gray-400 hover:text-gray-600">✕ 清除</button>
        </template>

        <!-- 显示已完成开关 -->
        <button @click="toggleHideCompleted" :class="['flex items-center gap-1.5 px-3 py-1 text-xs rounded-full border transition-colors', !store.filters.hideCompleted ? 'bg-green-50 border-green-300 text-green-700' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300']">
          <span>{{ store.filters.hideCompleted ? '☑ 隐藏已完成' : '✅ 显示已完成' }}</span>
        </button>
        <span v-if="store.filters.hideCompleted" class="text-xs text-gray-400">已完成项目已隐藏（共 {{ completedCount }} 项）</span>
      </div>
    </div>

    <div v-if="store.loading" class="flex justify-center py-16">
      <div class="text-gray-400 text-sm">加载中...</div>
    </div>

    <div v-else-if="displayedProjects.length === 0" class="flex flex-col items-center py-16 text-gray-400">
      <div class="text-4xl mb-3">📋</div>
      <div class="text-sm text-center px-8">
        <template v-if="store.projects.length === 0">还没有项目，去导入数据或新增项目</template>
        <template v-else-if="activeFilter">没有符合「{{ activeFilterLabel }}」条件的项目</template>
        <template v-else-if="store.filters.hideCompleted && completedCount > 0">当前没有未完成项目，可打开「显示已完成」查看全部项目。</template>
        <template v-else>没有符合条件的项目</template>
      </div>
      <button v-if="store.projects.length === 0" @click="$router.push('/')" class="mt-4 px-4 py-2 text-sm text-blue-500 border border-blue-300 rounded-lg">去首页导入数据</button>
      <button v-else-if="store.filters.hideCompleted && completedCount > 0 && !activeFilter" @click="toggleHideCompleted" class="mt-4 px-4 py-2 text-sm text-blue-500 border border-blue-300 rounded-lg">显示已完成项目</button>
    </div>

    <div v-else class="max-w-5xl mx-auto px-4 py-4 space-y-2">
      <div v-for="project in displayedProjects" :key="project.id"
        @click="$router.push('/projects/' + project.id)"
        :class="['bg-white rounded-xl border p-4 cursor-pointer hover:shadow-sm transition-all',
          isOverdue(project) ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-blue-300'
        ]">
        <div class="flex items-start justify-between gap-2 mb-2">
          <div class="flex items-center gap-2 flex-1 min-w-0">
            <span class="text-xs text-gray-400 shrink-0">#{{ project.seq }}</span>
            <span class="font-medium text-gray-900 truncate">{{ project.name }}</span>
          </div>
          <span :class="['text-xs px-2 py-0.5 rounded-full shrink-0 font-medium', PRIORITY_COLORS[project.priority] || 'bg-gray-100 text-gray-600']">{{ project.priority }}优先</span>
        </div>
        <div class="flex flex-wrap items-center gap-1.5 text-xs">
          <span class="text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{{ project.area }}</span>
          <span class="text-gray-400">·</span>
          <span class="text-gray-500">{{ project.category }}</span>
          <span class="text-gray-400">·</span>
          <span class="text-gray-500">{{ project.responsible }}</span>
          <span class="ml-auto flex items-center gap-1 flex-wrap justify-end">
            <span v-if="isOverdue(project)" class="px-2 py-0.5 rounded-full font-medium bg-red-100 text-red-700">已逾期</span>
            <span v-else-if="isDueThisWeek(project)" class="px-2 py-0.5 rounded-full font-medium bg-orange-100 text-orange-700">本周截止</span>
            <span v-if="isNoPlanDate(project)" class="px-2 py-0.5 rounded-full font-medium bg-yellow-100 text-yellow-700">未设计划日期</span>
            <span :class="['px-2 py-0.5 rounded-full font-medium', STATUS_COLORS[project.status] || 'bg-gray-100 text-gray-600']">{{ project.status }}</span>
          </span>
        </div>
        <div v-if="project.nextAction" class="mt-2 text-xs text-gray-400 truncate">→ {{ project.nextAction }}</div>
      </div>
    </div>

    <div class="h-8"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectsStore } from '../stores/projects'
import { STATUS_OPTIONS, PRIORITY_OPTIONS, RESPONSIBLE_OPTIONS, AREA_OPTIONS, CATEGORY_OPTIONS, PRIORITY_COLORS, STATUS_COLORS } from '../constants/options'

const store = useProjectsStore()
const route = useRoute()
const router = useRouter()

const keyword = ref('')
const filterStatus = ref('')
const filterPriority = ref('')
const filterResponsible = ref('')
const filterArea = ref('')
const filterCategory = ref('')
const activeFilter = ref('')
const sortBy = ref('priority_smart')

const sortOptions = [
  { value: 'priority_smart', label: '重点优先' },
  { value: 'planned_date', label: '计划日期最近' },
  { value: 'priority_desc', label: '优先级高到低' },
  { value: 'area', label: '区域' },
  { value: 'responsible', label: '责任方' },
  { value: 'seq', label: '原始序号' },
]

const completedCount = computed(() => store.projects.filter(p => p.status === '已完成').length)
const hasFilters = computed(() => keyword.value || filterStatus.value || filterPriority.value || filterResponsible.value || filterArea.value || filterCategory.value)

const activeFilterLabel = computed(() => {
  if (activeFilter.value === 'overdue') return '已逾期'
  if (activeFilter.value === 'dueThisWeek') return '本周截止'
  if (activeFilter.value === 'noPlanDate') return '高优先级未设计划日期'
  return ''
})

// 日期工具
const today = new Date()
today.setHours(0, 0, 0, 0)

function safeDate(dateStr) {
  if (!dateStr) return null
  try {
    const d = new Date(dateStr)
    return isNaN(d.getTime()) ? null : d
  } catch { return null }
}

function getWeekRange() {
  const now = new Date()
  const start = new Date(now)
  start.setHours(0, 0, 0, 0)
  start.setDate(now.getDate() - now.getDay() + 1)
  const end = new Date(start)
  end.setDate(start.getDate() + 6)
  end.setHours(23, 59, 59, 999)
  return { start, end }
}

function isOverdue(p) {
  if (p.status === '已完成') return false
  const d = safeDate(p.plannedDate)
  if (!d) return false
  return d < today
}

function isDueThisWeek(p) {
  if (p.status === '已完成') return false
  const d = safeDate(p.plannedDate)
  if (!d) return false
  const { start, end } = getWeekRange()
  return d >= start && d <= end
}

function isNoPlanDate(p) {
  if (p.status === '已完成') return false
  return p.priority === '高' && !p.plannedDate
}

// 重点优先打分
const PRIORITY_SCORE = { '高': 3, '中': 4, '低': 5 }
function smartScore(p) {
  if (isOverdue(p)) return 0
  if (isDueThisWeek(p)) return 1
  if (isNoPlanDate(p)) return 2
  return PRIORITY_SCORE[p.priority] ?? 6
}

// 排序函数
function sortProjects(list) {
  const arr = [...list]
  if (sortBy.value === 'priority_smart') {
    return arr.sort((a, b) => {
      const diff = smartScore(a) - smartScore(b)
      if (diff !== 0) return diff
      // 同分时按 seq 升序
      return (Number(a.seq) || 0) - (Number(b.seq) || 0)
    })
  }
  if (sortBy.value === 'planned_date') {
    return arr.sort((a, b) => {
      const da = safeDate(a.plannedDate)
      const db = safeDate(b.plannedDate)
      if (da && db) return da - db
      if (da) return -1
      if (db) return 1
      return (Number(a.seq) || 0) - (Number(b.seq) || 0)
    })
  }
  if (sortBy.value === 'priority_desc') {
    return arr.sort((a, b) => {
      const diff = (PRIORITY_SCORE[a.priority] ?? 6) - (PRIORITY_SCORE[b.priority] ?? 6)
      if (diff !== 0) return diff
      return (Number(a.seq) || 0) - (Number(b.seq) || 0)
    })
  }
  if (sortBy.value === 'area') {
    return arr.sort((a, b) => (a.area || '').localeCompare(b.area || '', 'zh'))
  }
  if (sortBy.value === 'responsible') {
    return arr.sort((a, b) => (a.responsible || '').localeCompare(b.responsible || '', 'zh'))
  }
  if (sortBy.value === 'seq') {
    return arr.sort((a, b) => (Number(a.seq) || 0) - (Number(b.seq) || 0))
  }
  return arr
}

// 最终展示列表：筛选 → 特殊filter → 排序
const displayedProjects = computed(() => {
  let base = store.filteredProjects
  if (activeFilter.value === 'overdue') base = base.filter(isOverdue)
  else if (activeFilter.value === 'dueThisWeek') base = base.filter(isDueThisWeek)
  else if (activeFilter.value === 'noPlanDate') base = base.filter(isNoPlanDate)
  return sortProjects(base)
})

function toggleHideCompleted() {
  store.setFilter('hideCompleted', !store.filters.hideCompleted)
}

function clearSpecialFilter() {
  activeFilter.value = ''
  router.replace({ query: {} })
}

function clearFilters() {
  keyword.value = ''
  filterStatus.value = ''
  filterPriority.value = ''
  filterResponsible.value = ''
  filterArea.value = ''
  filterCategory.value = ''
  activeFilter.value = ''
  store.clearFilters()
}

onMounted(() => {
  store.startListening()
  if (route.query.showCompleted === 'true') store.setFilter('hideCompleted', false)
  if (route.query.status) {
    filterStatus.value = route.query.status
    store.setFilter('status', route.query.status)
  }
  if (route.query.filter) {
    activeFilter.value = route.query.filter
    if (route.query.filter !== 'noPlanDate') {
      store.setFilter('hideCompleted', false)
    }
  }
})

onUnmounted(() => { store.stopListening() })
</script>