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
      </div>
      <div v-if="loading" class="w-full flex items-center justify-center py-3 text-sm text-gray-500">
        登录中...
      </div>
      <div v-else id="google-signin-btn" class="flex justify-center"></div>
      <p class="text-center text-xs text-gray-400 mt-6">
        登录后数据将自动在 Mac 和 iPhone 之间同步
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithCredential, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config.js'

const router = useRouter()
const loading = ref(true)
const errorMsg = ref('')

const CLIENT_ID = '761621589009-foggkfl9tj8beha81gft7j9ahp3r8ham.apps.googleusercontent.com'

onMounted(async () => {
  const user = await new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, (u) => { unsub(); resolve(u) })
  })
  if (user) {
    router.push({ name: 'Home' })
    return
  }

  loading.value = false

  const script = document.createElement('script')
  script.src = 'https://accounts.google.com/gsi/client'
  script.async = true
  script.defer = true
  script.onload = () => {
    window.google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCredentialResponse,
      use_fedcm_for_prompt: false,
    })
    window.google.accounts.id.renderButton(
      document.getElementById('google-signin-btn'),
      {
        theme: 'outline',
        size: 'large',
        width: 280,
        text: 'signin_with',
        locale: 'zh-CN',
      }
    )
  }
  document.head.appendChild(script)
})

async function handleCredentialResponse(response) {
  loading.value = true
  errorMsg.value = ''
  try {
    const credential = GoogleAuthProvider.credential(response.credential)
    await signInWithCredential(auth, credential)
    router.push({ name: 'Home' })
  } catch (e) {
    errorMsg.value = '登录失败：' + (e.code || e.message)
    loading.value = false
  }
}
</script>
