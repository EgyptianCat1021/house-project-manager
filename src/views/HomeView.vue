<template>
  <div class="min-h-screen bg-gray-50">

    <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">

        <div class="flex items-center gap-2">
          <span class="text-lg">🏠</span>
          <span class="font-semibold text-gray-900 text-sm sm:text-base">自建房收尾项目管理</span>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
            <img
              v-if="user?.photoURL"
              :src="user.photoURL"
              :alt="user.displayName"
              class="w-7 h-7 rounded-full"
            />
            <div v-else class="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
              {{ userInitial }}
            </div>
            <span class="hidden sm:block text-sm text-gray-600 max-w-[160px] truncate">
              {{ user?.displayName || user?.email }}
            </span>
          </div>

          <button
            @click="handleLogout"
            class="text-sm text-gray-500 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            退出
          </button>
        </div>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8">

      <div class="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-1">
          你好，{{ user?.displayName || '用户' }} 👋
        </h2>
        <p class="text-sm text-gray-500">
          登录成功！数据将自动同步到你的所有设备。
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div class="bg-white rounded-2xl border border-gray-200 p-6">
          <div class="text-2xl mb-3">📋</div>
          <h3 class="font-semibold text-gray-900 mb-1">项目清单</h3>
          <p class="text-sm text-gray-500">管理所有待完成的施工和采购项目</p>
          <div class="mt-4 inline-block text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded-md">第二阶段开发中</div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-200 p-6">
          <div class="text-2xl mb-3">📊</div>
          <h3 class="font-semibold text-gray-900 mb-1">项目看板</h3>
          <p class="text-sm text-gray-500">查看各区域和责任方的进度统计</p>
          <div class="mt-4 inline-block text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded-md">第二阶段开发中</div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-200 p-6">
          <div class="text-2xl mb-3">📐</div>
          <h3 class="font-semibold text-gray-900 mb-1">尺寸测量记录</h3>
          <p class="text-sm text-gray-500">记录窗帘、水槽等关键尺寸</p>
          <div class="mt-4 inline-block text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">第三阶段开发中</div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-200 p-6">
          <div class="text-2xl mb-3">💬</div>
          <h3 class="font-semibold text-gray-900 mb-1">沟通记录</h3>
          <p class="text-sm text-gray-500">记录与施工方、供应商的沟通结果</p>
          <div class="mt-4 inline-block text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">第三阶段开发中</div>
        </div>

      </div>

      <div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700">
        ✅ Firebase 连接正常，Google 登录成功。
      </div>

    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const user = ref(null)

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
</script>