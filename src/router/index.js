import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AddProjectView from '../views/AddProjectView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ExportView from '../views/ExportView.vue'
import ContractView from '../views/ContractView.vue'
import LoginView from '../views/LoginView.vue'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView,
    meta: { requiresAuth: true }
  },
  {
    path: '/projects/add',
    name: 'AddProject',
    component: AddProjectView,
    meta: { requiresAuth: true }
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetailView,
    meta: { requiresAuth: true }
  },
  {
    path: '/export',
    name: 'Export',
    component: ExportView,
    meta: { requiresAuth: true }
  },
  {
    path: '/contract',
    name: 'Contract',
    component: ContractView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 等待 Firebase Auth 初始化完成（只等一次）
let authReady = false
let currentUser = null

const authReadyPromise = new Promise((resolve) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    currentUser = user
    authReady = true
    unsubscribe()
    resolve(user)
  })
})

// 监听后续登录/登出变化
onAuthStateChanged(auth, (user) => {
  currentUser = user
})

router.beforeEach(async (to) => {
  // 等 Auth 初始化完成（无超时，等到为止）
  if (!authReady) {
    await authReadyPromise
  }

  if (to.meta.requiresAuth) {
    if (!currentUser) return { name: 'Login' }
  }

  // 已登录时访问 /login，跳回首页
  if (to.name === 'Login' && currentUser) {
    return { name: 'Home' }
  }
})

export default router
