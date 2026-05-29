import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AddProjectView from '../views/AddProjectView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ExportView from '../views/ExportView.vue'
import ContractView from '../views/ContractView.vue'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

const routes = [
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

// 带 3 秒超时的 Auth 检查
const getCurrentUser = () => new Promise((resolve) => {
  // 超时保险：3秒后当未登录处理，不让页面永远卡住
  const timer = setTimeout(() => {
    console.warn('Auth state check timeout, continue as guest')
    resolve(null)
  }, 3000)

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    clearTimeout(timer)
    unsubscribe()
    resolve(user)
  }, (error) => {
    // Auth 报错也不崩溃，当未登录处理
    console.warn('Auth state check error:', error)
    clearTimeout(timer)
    unsubscribe()
    resolve(null)
  })
})

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    const user = await getCurrentUser()
    if (!user) return { path: '/login' }
  }
})

export default router