<template>
  <div class="min-h-screen bg-gray-50">

    <!-- 顶部导航 -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <button @click="$router.push('/')" class="text-gray-400 hover:text-gray-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 class="font-semibold text-gray-900">项目清单</h1>
          <span class="text-sm text-gray-400">{{ filteredProjects.length }} 项</span>
        </div>
        <button
          @click="$router.push('/projects/add')"
          class="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
        >
          <span>+</span> 新增
        </button>
      </div>
    </header>

    <!-- 筛选栏 -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-5xl mx-auto px-4 py-3 flex flex-wrap gap-2">
        <!-- 搜索框 -->
        <input
          v-model="keyword"
          @input="store.setFilter('keyword', keyword)"
          type="text"
          placeholder="搜索项目名称..."
          class="flex-1 min-w-[140px] px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
        />

        <!-- 状态筛选 -->
        <select
          v-model="filterStatus"
          @change="store.setFilter('status', filterStatus)"
          class="px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white"
        >
          <option value="">全部状态</option>
          <option v-for="s in STATUS_OPTIONS" :key="s" :value="s">{{ s }}</option>
        </select>

        <!-- 优先级筛选 -->
        <select
          v-model="filterPriority"
          @change="store.setFilter('priority', filterPriority)"
          class="px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white"
        >
          <option value="">全部优先级</option>
          <option v-for="p in PRIORITY_OPTIONS" :key="p" :value="p">{{ p }}</option>
        </select>

        <!-- 责任方筛选 -->
        <select
          v-model="filterResponsible"
          @change="store.setFilter('responsible', filterResponsible)"
          class="px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white"
        >
          <option value="">全部责任方</option>
          <option v-for="r in RESPONSIBLE_OPTIONS" :key="r" :value="r">{{ r }}</option>
        </select>

        <!-- 区域筛选 -->
        <select
          v-model="filterArea"
          @change="store.setFilter('area', filterArea)"
          class="px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white"
        >
          <option value="">全部区域</option>
          <option v-for="a in AREA_OPTIONS" :key="a" :value="a">{{ a }}</option>
        </select>

        <!-- 类型筛选 -->
        <select
          v-model="filterCategory"
          @change="store.setFilter('category', filterCategory)"
          class="px-2 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white"
        >
          <option value="">全部类型</option>
          <option v-for="c in CATEGORY_OPTIONS" :key="c" :value="c">{{ c }}</option>
        </select>

        <!-- 清空筛选 -->
        <button
          v-if="hasFilters"
          @click="clearFilters"
          class="px-2 py-1.5 text-sm text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg"
        >
          清空
        </button>
      </div>
    </div>

    <!-- 加载中 -->
    <div v-if="store.loading" class="flex justify-center py-16">
      <div class="text-gray-400 text-sm">加载中...</div>
    </div>

    <!-- 空状态 -->
    <div v-else-if="filteredProjects.length === 0" class="flex flex-col items-center py-16 text-gray-400">
      <div class="text-4xl mb-3">📋</div>
      <div class="text-sm">{{ store.projects.length === 0 ? '还没有项目，去导入数据或新增项目' : '没有符合条件的项目' }}</div>
      <button
        v-if="store.projects.length === 0"
        @click="$router.push('/')"
        class="mt-4 px-4 py-2 text-sm text-blue-500 border border-blue-300 rounded-lg"
      >
        去首页导入数据
      </button>
    </div>

    <!-- 项目列表 -->
    <div v-else class="max-w-5xl mx-auto px-4 py-4 space-y-2">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        @click="$router.push(`/projects/${project.id}`)"
        class="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all"
      >
        <!-- 第一行：序号 + 项目名 + 优先级 -->
        <div class="flex items-start justify-between gap-2 mb-2">
          <div class="flex items-center gap-2 flex-1 min-w-0">
            <span class="text-xs text-gray-400 shrink-0">#{{ project.seq }}</span>
            <span class="font-medium text-gray-900 truncate">{{ project.name }}</span>
          </div>
          <span :class="['text-xs px-2 py-0.5 rounded-full shrink-0 font-medium', PRIORITY_COLORS[project.priority] || 'bg-gray-100 text-gray-600']">
            {{ project.priority }}优先
          </span>
        </div>

        <!-- 第二行：区域 + 类型 + 责任方 + 状态 -->
        <div class="flex flex-wrap items-center gap-1.5 text-xs">
          <span class="text-gray-500 bg-gray-50 px-2 py-0.5 rounded">{{ project.area }}</span>
          <span class="text-gray-400">·</span>
          <span class="text-gray-500">{{ project.category }}</span>
          <span class="text-gray-400">·</span>
          <span class="text-gray-500">{{ project.responsible }}</span>
          <span class="ml-auto">
            <span :class="['px-2 py-0.5 rounded-full font-medium', STATUS_COLORS[project.status] || 'bg-gray-100 text-gray-600']">
              {{ project.status }}
            </span>
          </span>
        </div>

        <!-- 第三行：下一步动作（如果有） -->
        <div v-if="project.nextAction" class="mt-2 text-xs text-gray-400 truncate">
          → {{ project.nextAction }}
        </div>
      </div>
    </div>

    <!-- 底部留白 -->
    <div class="h-8"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useProjectsStore } from '../stores/projects'
import {
  STATUS_OPTIONS,
  PRIORITY_OPTIONS,
  RESPONSIBLE_OPTIONS,
  AREA_OPTIONS,
  CATEGORY_OPTIONS,
  PRIORITY_COLORS,
  STATUS_COLORS
} from '../constants/options'

const store = useProjectsStore()

const keyword = ref('')
const filterStatus = ref('')
const filterPriority = ref('')
const filterResponsible = ref('')
const filterArea = ref('')
const filterCategory = ref('')

const filteredProjects = computed(() => store.filteredProjects)

const hasFilters = computed(() => {
  return keyword.value || filterStatus.value || filterPriority.value ||
    filterResponsible.value || filterArea.value || filterCategory.value
})

function clearFilters() {
  keyword.value = ''
  filterStatus.value = ''
  filterPriority.value = ''
  filterResponsible.value = ''
  filterArea.value = ''
  filterCategory.value = ''
  store.clearFilters()
}

onMounted(() => {
  store.startListening()
})

onUnmounted(() => {
  store.stopListening()
})
</script>