<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-sm">
      <div class="text-center mb-8">
        <div class="text-3xl mb-3">🏠</div>
        <h1 class="text-xl font-semibold text-gray-900">自建房收尾项目管理</h1>
        <p class="text-sm text-gray-500 mt-2">请登录以同步您的项目数据</p>
      </div>
      <div v-if="errorMsg" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
        {{ errorMsg }}
        <div v-if="showManualHint" class="mt-2 text-xs text-gray-500">
          请在浏览器地址栏允许弹出窗口，或尝试使用 Chrome 浏览器打开。
        </div>
      </div>
      <button
        @click="handleGoogleLogin"
        :disabled="loading"
        class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg v-if="!loading" width="18" height="18" viewBox="0 0 18 18">
          <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
          <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
          <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"/>
          <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"/>
        </svg>
        <svg v-else class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
        </svg>
        <span>{{ loading ? '登录中...' : '使用 Google 账号登录' }}</span>
      </button>
      <p class="text-center text-xs text-gray-400 mt-6">
        登录后数据将自动在 Mac 和 iPhone 之间同步
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/config.js'

const loading = ref(false)
const errorMsg = ref('')
const showManualHint = ref(false)

// 判断是否是 Safari
function isSafari() {
  const ua = navigator.userAgent
  return /Safari/.test(ua) && !/Chrome/.test(ua)
}

onMounted(async () => {
  // 处理 redirect 回调
  try {
    loading.value = true
    const result = await getRedirectResult(auth)
    if (result?.user) {
      window.location.hash = '/'
    }
  } catch (e) {
    console.warn('redirect result:', e)
  } finally {
    loading.value = false
  }
})

async function handleGoogleLogin() {
  loading.value = true
  errorMsg.value = ''
  showManualHint.value = false

  try {
    if (isSafari()) {
      // Safari 用 redirect
      await signInWithRedirect(auth, googleProvider)
    } else {
      // 其他浏览器用 popup
      await signInWithPopup(auth, googleProvider)
      window.location.hash = '/'
      window.location.reload()
    }
  } catch (error) {
    console.error('登录失败:', error)
    if (error.code === 'auth/popup-closed-by-user') {
      errorMsg.value = '登录窗口已关闭，请重试。'
    } else if (error.code === 'auth/popup-blocked') {
      errorMsg.value = '弹出窗口被浏览器阻止。'
      showManualHint.value = true
    } else {
      errorMsg.value = '登录失败：' + error.code
    }
    loading.value = false
  }
}
</script>