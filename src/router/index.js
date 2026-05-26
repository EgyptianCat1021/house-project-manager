import { createRouter, createWebHashHistory } from 'vue-router'
import { auth } from '../firebase/config.js'
import { onAuthStateChanged } from 'firebase/auth'

import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const getCurrentUser = () => new Promise((resolve) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    unsubscribe()
    resolve(user)
  })
})

router.beforeEach(async (to) => {
  const user = await getCurrentUser()
  if (to.meta.requiresAuth && !user) {
    return { name: 'Login' }
  }
  if (to.name === 'Login' && user) {
    return { name: 'Home' }
  }
})

export default router