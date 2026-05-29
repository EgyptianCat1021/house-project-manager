import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { initializeAuth, inMemoryPersistence, GoogleAuthProvider } from 'firebase/auth'

// =====================================================
// Firebase Web 配置
// 真正的安全保障来自 Firestore Security Rules
// =====================================================
const firebaseConfig = {
  apiKey: "AIzaSyBNyMbm_ukGVwBBzJzdV1fEb0p_T9Nxt-A",
  authDomain: "house-project-manager.firebaseapp.com",
  projectId: "house-project-manager",
  storageBucket: "house-project-manager.firebasestorage.app",
  messagingSenderId: "761621589009",
  appId: "1:761621589009:web:a00d410916c2fcc47815b0"
}

const app = initializeApp(firebaseConfig)

// 用 browserSessionPersistence 替代默认的 indexedDB
// 避免 Firebase Auth iframe 机制在 iOS 26 beta 上卡死
export const auth = initializeAuth(app, {
  persistence: inMemoryPersistence
})

export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()