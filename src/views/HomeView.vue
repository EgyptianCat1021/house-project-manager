<template>
  <div class="min-h-screen bg-gray-50">

    <!-- 顶部导航栏 -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg">🏠</span>
          <span class="font-semibold text-gray-900 text-sm sm:text-base">自建房收尾项目管理</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
            <img v-if="user?.photoURL" :src="user.photoURL" :alt="user.displayName" class="w-7 h-7 rounded-full" />
            <div v-else class="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
              {{ userInitial }}
            </div>
            <span class="hidden sm:block text-sm text-gray-600 max-w-[160px] truncate">
              {{ user?.displayName || user?.email }}
            </span>
          </div>
          <button @click="handleLogout" class="text-sm text-gray-500 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
            退出
          </button>
        </div>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-6">

      <!-- 欢迎卡片 -->
      <div class="bg-white rounded-2xl border border-gray-200 p-5 mb-5">
        <h2 class="text-base font-semibold text-gray-900 mb-1">你好，{{ user?.displayName || '用户' }} 👋</h2>
        <p class="text-sm text-gray-500">数据自动同步到你的所有设备。</p>
      </div>

      <!-- 功能入口 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">

        <button
          @click="$router.push('/projects')"
          class="bg-white rounded-2xl border border-gray-200 p-5 text-left hover:border-blue-300 hover:shadow-sm transition-all"
        >
          <div class="text-2xl mb-2">📋</div>
          <h3 class="font-semibold text-gray-900 mb-1">项目清单</h3>
          <p class="text-sm text-gray-500">管理所有待完成的施工和采购项目</p>
          <div class="mt-3 text-xs text-blue-500 font-medium">点击进入 →</div>
        </button>

        <div class="bg-white rounded-2xl border border-gray-200 p-5 opacity-60">
          <div class="text-2xl mb-2">📊</div>
          <h3 class="font-semibold text-gray-900 mb-1">项目看板</h3>
          <p class="text-sm text-gray-500">查看各区域和责任方的进度统计</p>
          <div class="mt-3 text-xs text-gray-400">第五阶段开发中</div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-200 p-5 opacity-60">
          <div class="text-2xl mb-2">📐</div>
          <h3 class="font-semibold text-gray-900 mb-1">尺寸测量记录</h3>
          <p class="text-sm text-gray-500">记录窗帘、水槽等关键尺寸</p>
          <div class="mt-3 text-xs text-gray-400">第三阶段开发中</div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-200 p-5 opacity-60">
          <div class="text-2xl mb-2">💬</div>
          <h3 class="font-semibold text-gray-900 mb-1">沟通记录</h3>
          <p class="text-sm text-gray-500">记录与施工方、供应商的沟通结果</p>
          <div class="mt-3 text-xs text-gray-400">第三阶段开发中</div>
        </div>

      </div>

      <!-- 数据初始化卡片 -->
      <div class="bg-white rounded-2xl border border-gray-200 p-5">
        <h3 class="font-semibold text-gray-900 mb-1">数据初始化</h3>
        <p class="text-sm text-gray-500 mb-4">首次使用时，可以一键导入 Excel 里的 100 条初始项目数据。</p>

        <!-- 状态显示 -->
        <div v-if="importStatus" :class="[
          'mb-4 p-3 rounded-xl text-sm',
          importStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
          importStatus.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
          'bg-blue-50 text-blue-700 border border-blue-200'
        ]">
          {{ importStatus.message }}
        </div>

        <!-- 按钮组 -->
        <div class="flex flex-wrap gap-2">
          <button
            @click="handleImportMissing"
            :disabled="importing"
            class="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ importing ? '导入中...' : '仅导入缺失项' }}
          </button>
          <button
            @click="showClearConfirm = true"
            :disabled="importing"
            class="px-4 py-2 text-sm border border-red-300 text-red-500 rounded-lg hover:bg-red-50 disabled:opacity-50"
          >
            清空后重新导入
          </button>
        </div>

        <p class="text-xs text-gray-400 mt-3">
          · 仅导入缺失项：按序号比对，只补充数据库中没有的项目<br>
          · 清空后重新导入：删除所有现有数据，重新导入全部100条
        </p>
      </div>

    </main>

    <!-- 清空确认弹窗 -->
    <div v-if="showClearConfirm" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div class="bg-white rounded-2xl p-6 w-full max-w-sm">
        <h3 class="font-semibold text-gray-900 mb-2">⚠️ 确认清空并重新导入</h3>
        <p class="text-sm text-gray-500 mb-6">
          这会删除数据库中的<strong>所有现有项目数据</strong>，然后重新导入初始100条数据。<br><br>
          此操作不可恢复，请确认。
        </p>
        <div class="flex gap-3">
          <button @click="showClearConfirm = false" class="flex-1 py-2 text-sm border border-gray-300 rounded-lg">取消</button>
          <button @click="handleClearAndImport" :disabled="importing" class="flex-1 py-2 text-sm text-white bg-red-500 rounded-lg disabled:opacity-50">
            {{ importing ? '处理中...' : '确认清空并导入' }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config.js'
import { batchImportProjects, clearAllProjects, getProjectCount } from '../firebase/projects.js'
import { INITIAL_PROJECTS } from '../data/initialData.js'

const user = ref(null)
const importing = ref(false)
const importStatus = ref(null)
const showClearConfirm = ref(false)

onAuthStateChanged(auth, (firebaseUser) => {
  user.value = firebaseUser
})

const userInitial = computed(() => {
  const name = user.value?.displayName || user.value?.email || '?'
  return name.charAt(0).toUpperCase()
})

async function handleLogout() {
  await signOut(auth)
  window.location.href = window.location.origin + window.location.pathname
}

// 仅导入缺失项
async function handleImportMissing() {
  importing.value = true
  importStatus.value = { type: 'info', message: '正在检查数据库...' }
  try {
    const { fetchProjects } = await import('../firebase/projects.js')
    const existing = await fetchProjects()
    const existingSeqs = new Set(existing.map(p => p.seq))

    const missing = INITIAL_PROJECTS.filter(p => !existingSeqs.has(p.seq))

    if (missing.length === 0) {
      importStatus.value = { type: 'success', message: '✅ 数据库已有全部100条数据，无需导入。' }
      return
    }

    importStatus.value = { type: 'info', message: `正在导入 ${missing.length} 条缺失数据...` }
    await batchImportProjects(missing)
    importStatus.value = { type: 'success', message: `✅ 成功导入 ${missing.length} 条数据！` }
  } catch (e) {
    importStatus.value = { type: 'error', message: '❌ 导入失败：' + e.message }
  } finally {
    importing.value = false
  }
}

// 清空后重新导入
async function handleClearAndImport() {
  showClearConfirm.value = false
  importing.value = true
  importStatus.value = { type: 'info', message: '正在清空数据库...' }
  try {
    await clearAllProjects()
    importStatus.value = { type: 'info', message: '正在导入100条初始数据...' }
    await batchImportProjects(INITIAL_PROJECTS)
    importStatus.value = { type: 'success', message: '✅ 已清空并重新导入全部100条数据！' }
  } catch (e) {
    importStatus.value = { type: 'error', message: '❌ 操作失败：' + e.message }
  } finally {
    importing.value = false
  }
}
</script>