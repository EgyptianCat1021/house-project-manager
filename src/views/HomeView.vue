<template>
  <div class="min-h-screen bg-gray-50">

    <!-- 顶部 -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <div>
          <h1 class="font-semibold text-gray-900">🏠 自建房收尾项目管理</h1>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-sm text-gray-500">{{ user?.displayName }}</span>
          <button @click="logout" class="text-sm text-gray-400 hover:text-gray-600">退出</button>
        </div>
      </div>
    </header>

    <!-- 加载中 -->
    <div v-if="store.loading" class="flex justify-center py-16">
      <div class="text-gray-400 text-sm">加载中...</div>
    </div>

    <div v-else class="max-w-2xl mx-auto px-4 py-4 space-y-4">

      <!-- 欢迎语 -->
      <div class="bg-white rounded-xl border border-gray-200 px-4 py-3">
        <p class="text-gray-700">你好，{{ user?.displayName }} 👋</p>
        <p class="text-xs text-gray-400 mt-0.5">数据自动同步到你的所有设备。</p>
      </div>

      <!-- 核心数据：第一排 -->
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-white rounded-xl border border-gray-200 p-3 text-center">
          <div class="text-2xl font-bold text-gray-900">{{ stats.totalProjects }}</div>
          <div class="text-xs text-gray-400 mt-1">总项目</div>
        </div>
        <div @click="goFilter('status', '')"
          class="bg-white rounded-xl border border-orange-200 p-3 text-center cursor-pointer hover:bg-orange-50">
          <div class="text-2xl font-bold text-orange-500">{{ stats.unfinishedCount }}</div>
          <div class="text-xs text-gray-400 mt-1">未完成</div>
        </div>
        <div @click="$router.push({ path: '/projects', query: { showCompleted: 'true', status: '已完成' } })" class="bg-white rounded-xl border border-green-200 p-3 text-center cursor-pointer hover:bg-green-50">
          <div class="text-2xl font-bold text-green-500">{{ stats.completedCount }}</div>
          <div class="text-xs text-gray-400 mt-1">已完成</div>
        </div>
      </div>

      <!-- 重点关注 -->
      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">重点关注</h2>
        </div>
        <div class="grid grid-cols-2 divide-x divide-y divide-gray-100">

          <div @click="goFilter('priority', '高')"
            class="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
            <span class="text-sm text-gray-600">🔴 高优先级未完成</span>
            <span class="text-lg font-bold text-red-500">{{ stats.highPriorityUnfinished }}</span>
          </div>

          <div @click="goFilterStatus('有问题需协调')"
            class="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
            <span class="text-sm text-gray-600">⚠️ 有问题需协调</span>
            <span class="text-lg font-bold text-red-400">{{ stats.issueCount }}</span>
          </div>

          <div @click="goFilterStatus('待采购')"
            class="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
            <span class="text-sm text-gray-600">🛒 待采购</span>
            <span class="text-lg font-bold text-blue-500">{{ stats.pendingPurchase }}</span>
          </div>

          <div @click="goFilterStatus('待施工')"
            class="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
            <span class="text-sm text-gray-600">🔨 待施工</span>
            <span class="text-lg font-bold text-purple-500">{{ stats.pendingConstruction }}</span>
          </div>

          <div @click="goFilterStatus('待验收')"
            class="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
            <span class="text-sm text-gray-600">✅ 待验收</span>
            <span class="text-lg font-bold text-indigo-500">{{ stats.pendingAcceptance }}</span>
          </div>

          <div @click="goFilterStatus('待测量/确认')"
            class="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
            <span class="text-sm text-gray-600">📐 待测量/确认</span>
            <span class="text-lg font-bold text-yellow-500">{{ stats.pendingMeasurement }}</span>
          </div>

          <div @click="$router.push('/projects?filter=overdue')"
            class="p-4 cursor-pointer hover:bg-red-50 flex items-center justify-between">
            <span class="text-sm text-gray-600">🚨 已逾期未完成</span>
            <span class="text-lg font-bold text-red-600">{{ stats.overdueCount }}</span>
          </div>

          <div @click="$router.push('/projects?filter=noPlanDate')"
            class="p-4 cursor-pointer hover:bg-yellow-50 flex items-center justify-between">
            <span class="text-sm text-gray-600">📅 高优先级未设日期</span>
            <span class="text-lg font-bold text-yellow-600">{{ stats.noPlanDateCount }}</span>
          </div>

        </div>
      </div>

      <!-- 本周截止 -->
      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
          <h2 @click="$router.push('/projects?filter=dueThisWeek')" class="text-sm font-medium text-gray-700 cursor-pointer hover:text-blue-500">本周截止事项 →</h2>
          <span class="text-xs text-gray-400">{{ stats.dueThisWeek }} 项</span>
        </div>
        <div v-if="stats.dueThisWeek === 0" class="px-4 py-6 text-center text-sm text-gray-400">
          本周暂无截止事项 🎉
        </div>
        <div v-else class="divide-y divide-gray-100">
          <div v-for="p in stats.dueThisWeekList" :key="p.id"
            @click="$router.push(`/projects/${p.id}`)"
            class="px-4 py-3 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
            <div>
              <div class="text-sm text-gray-800">{{ p.name }}</div>
              <div class="text-xs text-gray-400 mt-0.5">{{ p.area }} · {{ p.responsible }}</div>
            </div>
            <div class="text-right">
              <div class="text-xs text-orange-500 font-medium">{{ p.plannedDate }}</div>
              <div :class="['text-xs mt-0.5 px-2 py-0.5 rounded-full', STATUS_COLORS[p.status] || 'bg-gray-100 text-gray-500']">
                {{ p.status }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 按责任方统计 -->
      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">按责任方（未完成）</h2>
        </div>
        <div class="divide-y divide-gray-100">
          <div v-for="(count, name) in stats.byResponsible" :key="name"
            @click="goFilter('responsible', name)"
            class="px-4 py-3 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
            <span class="text-sm text-gray-700">{{ name }}</span>
            <div class="flex items-center gap-2">
              <div class="h-2 rounded-full bg-blue-200 overflow-hidden" style="width:80px">
                <div class="h-2 bg-blue-500 rounded-full"
                  :style="{ width: (count / stats.unfinishedCount * 100) + '%' }">
                </div>
              </div>
              <span class="text-sm font-medium text-gray-700 w-6 text-right">{{ count }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 按区域统计 -->
      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">按区域（未完成）</h2>
        </div>
        <div class="divide-y divide-gray-100">
          <div v-for="(count, name) in stats.byArea" :key="name"
            @click="goFilter('area', name)"
            class="px-4 py-3 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
            <span class="text-sm text-gray-700">{{ name }}</span>
            <div class="flex items-center gap-2">
              <div class="h-2 rounded-full bg-purple-200 overflow-hidden" style="width:80px">
                <div class="h-2 bg-purple-500 rounded-full"
                  :style="{ width: (count / stats.unfinishedCount * 100) + '%' }">
                </div>
              </div>
              <span class="text-sm font-medium text-gray-700 w-6 text-right">{{ count }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 进入项目清单 -->
      <div @click="$router.push('/projects')"
        class="bg-blue-500 rounded-xl p-4 text-center cursor-pointer hover:bg-blue-600 transition-colors">
        <span class="text-white font-medium">查看全部项目清单 →</span>
      </div>

      <!-- 合同与付款管理 -->
      <div @click="$router.push('/contract')"
        class="bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
        <div>
          <h2 class="text-sm font-medium text-gray-700">合同与付款管理</h2>
          <p class="text-xs text-gray-400 mt-0.5">合同概览、调整记录、付款记录</p>
        </div>
        <span class="text-gray-400">→</span>
      </div>

      <!-- 数据导出备份 -->
      <div @click="$router.push('/export')"
        class="bg-white rounded-xl border border-gray-200 px-4 py-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
        <div>
          <h2 class="text-sm font-medium text-gray-700">数据导出备份</h2>
          <p class="text-xs text-gray-400 mt-0.5">导出 JSON 全量备份或 CSV 文件</p>
        </div>
        <span class="text-gray-400">→</span>
      </div>
      
      <!-- 数据初始化 -->
      <div class="bg-white rounded-xl border border-gray-200 p-4">
        <h2 class="text-sm font-medium text-gray-700 mb-1">数据初始化</h2>
        <p class="text-xs text-gray-400 mb-3">首次使用时，可以一键导入 Excel 里的 100 条初始项目数据。</p>
        <div class="flex gap-2">
          <button @click="importMissing"
            class="flex-1 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            仅导入缺失项
          </button>
          <button @click="reimportAll"
            class="flex-1 py-2 text-sm border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50">
            清空后重新导入
          </button>
        </div>
        <p v-if="importMsg" class="text-xs text-green-600 mt-2 text-center">{{ importMsg }}</p>
      </div>

      <div class="h-8"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProjectsStore } from '../stores/projects'
import { useCurrentUser } from '../composables/useCurrentUser'
import { getAuth, signOut } from 'firebase/auth'
import { STATUS_COLORS } from '../constants/options'
import { INITIAL_PROJECTS } from '../data/initialData'
import { addProject, fetchProjects, deleteProject } from '../firebase/projects'

const router = useRouter()
const store = useProjectsStore()
const { user } = useCurrentUser()
const stats = computed(() => store.stats)
const importMsg = ref('')

onMounted(() => {
  store.startListening()
})

onUnmounted(() => {
  store.stopListening()
})

// 跳转到项目列表并筛选
function goFilter(key, value) {
  store.clearFilters()
  if (value) store.setFilter(key, value)
  router.push('/projects')
}

function goFilterStatus(status) {
  goFilter('status', status)
}

// 退出登录
async function logout() {
  const auth = getAuth()
  await signOut(auth)
  router.push('/login')
}

// 导入缺失项
async function importMissing() {
  const existing = await fetchProjects()
  const existingSeqs = new Set(existing.map(p => p.seq))
  const missing = INITIAL_PROJECTS.filter(p => !existingSeqs.has(p.seq))
  for (const p of missing) await addProject(p)
  importMsg.value = `✅ 已导入 ${missing.length} 条缺失数据！`
  setTimeout(() => importMsg.value = '', 3000)
}

// 清空后重新导入
async function reimportAll() {
  const existing = await fetchProjects()
  for (const p of existing) await deleteProject(p.id)
  for (const p of INITIAL_PROJECTS) await addProject(p)
  importMsg.value = '✅ 已清空并重新导入全部100条数据！'
  setTimeout(() => importMsg.value = '', 3000)
}
</script>