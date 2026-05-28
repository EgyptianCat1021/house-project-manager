import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBNyMbm_ukGVwBBzJzdV1fEb0p_T9Nxt-A',
  authDomain: 'house-project-manager.firebaseapp.com',
  projectId: 'house-project-manager',
  storageBucket: 'house-project-manager.firebasestorage.app',
  messagingSenderId: '761621589009',
  appId: '1:761621589009:web:a00d410916c2fcc47815b0'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const payments = [
  { paymentDate: '2024-10-25', amount: 10000,  method: '微信转账', paymentStage: '其他',       payer: '韩永宏', payee: '曹义和', reason: '应乙方要求甲方支付图纸设计启动款', verified: true },
  { paymentDate: '2024-10-27', amount: 150000, method: '工商银行', paymentStage: '第一次40%',  payer: '韩永宏', payee: '曹义和', reason: '支付第一笔装修房款', verified: true },
  { paymentDate: '2025-01-25', amount: 10000,  method: '建设银行', paymentStage: '其他',       payer: '韩永宏', payee: '曹义和', reason: '曹义和回家过年前，甲方出于善意预支付一万元工程款', verified: true },
  { paymentDate: '2025-04-07', amount: 70000,  method: '农业银行', paymentStage: '第二次30%',  payer: '韩永宏', payee: '曹义和', reason: '应乙方要求，甲方支付第二笔装修款', verified: true },
  { paymentDate: '2025-06-16', amount: 80000,  method: '工商银行', paymentStage: '第三次20%',  payer: '韩永宏', payee: '曹义和', reason: '应乙方要求，甲方第三次支付装修款', verified: true },
  { paymentDate: '2025-08-13', amount: 20000,  method: '微信转账', paymentStage: '第四次10%',  payer: '韩永宏', payee: '曹义和', reason: '应乙方要求，甲方第四次支付装修款', verified: true },
  { paymentDate: '2026-04-04', amount: 10000,  method: '微信转账', paymentStage: '补充协议款', payer: '韩永宏', payee: '曹义和', reason: '根据合同补充协议，甲方支付一万元', verified: true },
]

const col = collection(db, 'payments')
const existing = await getDocs(col)
if (existing.size > 0) {
  console.log('付款记录已存在', existing.size, '条，跳过导入')
  process.exit(0)
}
for (const p of payments) {
  await addDoc(col, { ...p, createdAt: serverTimestamp(), updatedAt: serverTimestamp() })
  console.log('已导入：', p.paymentDate, p.amount, p.reason)
}
console.log('全部导入完成！共', payments.length, '条')
process.exit(0)
