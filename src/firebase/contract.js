import {
  doc, getDoc, setDoc, collection,
  addDoc, updateDoc, deleteDoc,
  query, orderBy, onSnapshot, serverTimestamp
} from 'firebase/firestore'
import { db } from './config'

// ─── 合同概览 ───────────────────────────────────────

const CONTRACT_DOC = doc(db, 'contract', 'main')

// 默认合同信息（非敏感）
const DEFAULT_CONTRACT = {
  contractNo: '24A-017',
  contractName: '装饰装修工程施工合同',
  originalAmount: 390000,
  signDate: '2024-10-25',
  plannedCompletionDate: '2025-07-10',
  originalDuration: 260,
  paymentStages: ['第一次40%', '第二次30%', '第三次20%', '第四次10%'],
  supplementDate: '2026-04-03',
  paidAmount: 350000,
  notes: ''
}

// 读取合同概览，不存在则写入默认值
export async function getContract() {
  const snap = await getDoc(CONTRACT_DOC)
  if (snap.exists()) return snap.data()
  await setDoc(CONTRACT_DOC, DEFAULT_CONTRACT)
  return DEFAULT_CONTRACT
}

// 更新合同概览
export async function updateContract(data) {
  await setDoc(CONTRACT_DOC, data, { merge: true })
}

// ─── 合同调整记录 ────────────────────────────────────

const ADJUSTMENTS_COL = collection(db, 'contractAdjustments')

// 默认调整记录（浴室柜扣减）
const DEFAULT_ADJUSTMENT = {
  title: '浴室柜减少1个',
  originalContent: '原合同内包含浴室柜4个',
  changedContent: '乙方负责3个，甲方自购1个',
  amount: -1500,
  type: '扣减',
  status: '已确认',
  affectsPayment: true,
  responsibleParty: '甲方自购，乙方不再施工',
  agreementDate: '2026-04-03',
  notes: '双方已沟通确认，从合同金额中扣除'
}

// 实时监听调整记录
export function subscribeAdjustments(callback) {
  const q = query(ADJUSTMENTS_COL, orderBy('createdAt', 'desc'))
  return onSnapshot(q, snap => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })))
  })
}

// 新增调整记录
export async function addAdjustment(data) {
  await addDoc(ADJUSTMENTS_COL, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })
}

// 更新调整记录
export async function updateAdjustment(id, data) {
  await updateDoc(doc(db, 'contractAdjustments', id), {
    ...data,
    updatedAt: serverTimestamp()
  })
}

// 删除调整记录
export async function deleteAdjustment(id) {
  await deleteDoc(doc(db, 'contractAdjustments', id))
}

// 初始化默认调整记录（只在空集合时写入）
export async function initDefaultAdjustment() {
  const q = query(ADJUSTMENTS_COL)
  return new Promise(resolve => {
    const unsub = onSnapshot(q, snap => {
      unsub()
      if (snap.empty) {
        addDoc(ADJUSTMENTS_COL, {
          ...DEFAULT_ADJUSTMENT,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }).then(resolve)
      } else {
        resolve()
      }
    })
  })
}

// ─── 付款记录 ────────────────────────────────────────

const PAYMENTS_COL = collection(db, 'payments')

// 实时监听付款记录
export function subscribePayments(callback) {
  const q = query(PAYMENTS_COL, orderBy('paymentDate', 'desc'))
  return onSnapshot(q, snap => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })))
  })
}

// 新增付款记录
export async function addPayment(data) {
  await addDoc(PAYMENTS_COL, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })
}

// 更新付款记录
export async function updatePayment(id, data) {
  await updateDoc(doc(db, 'payments', id), {
    ...data,
    updatedAt: serverTimestamp()
  })
}

// 删除付款记录
export async function deletePayment(id) {
  await deleteDoc(doc(db, 'payments', id))
}