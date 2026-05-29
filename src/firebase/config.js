import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBNyMbm_ukGVwBBzJzdV1fEb0p_T9Nxt-A",
  authDomain: "house-project-manager.firebaseapp.com",
  projectId: "house-project-manager",
  storageBucket: "house-project-manager.firebasestorage.app",
  messagingSenderId: "761621589009",
  appId: "1:761621589009:web:a00d410916c2fcc47815b0"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()