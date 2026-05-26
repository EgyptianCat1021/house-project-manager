import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// =====================================================
// 关于安全性的重要说明
// =====================================================
// Firebase Web 配置（apiKey 等）放在前端代码里是正常做法，
// 这些值本身不是"密钥"，它们只是用来识别你的 Firebase 项目。
//
// 真正的安全保障来自 Firestore Security Rules（数据库安全规则）。
// 本项目已将规则配置为"只有你的指定邮箱才能读写数据"，
// 其他人即使看到这份配置，也无法读取或修改你的数据。
//
// 但请注意：
// - 不要把家庭隐私、真实地址、私人照片直接写进前端代码
// - 不要把真实的银行卡号、身份证等敏感信息存入数据库
// - 如果你的 GitHub 仓库是 public，代码是公开可见的
// =====================================================

// =====================================================
// 请把下面占位符替换成你自己的 Firebase 项目配置
// 获取方法见 README.md 第一步第 1.5 节
// =====================================================
const firebaseConfig = {
  apiKey: "AIzaSyBNyMbm_ukGVwBBzJzdV1fEb0p_T9Nxt-A",
  authDomain: "house-project-manager.firebaseapp.com",
  projectId: "house-project-manager",
  storageBucket: "house-project-manager.firebasestorage.app",
  messagingSenderId: "761621589009",
  appId: "1:761621589009:web:a00d410916c2fcc47815b0"
}
// =====================================================

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()