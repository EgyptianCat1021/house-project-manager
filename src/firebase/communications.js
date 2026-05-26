import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
  serverTimestamp
} from 'firebase/firestore'
import { db } from './config'

const COL = 'communications'

// 获取某项目的所有沟通记录
export async function getCommunicationsByProject(projectId) {
  const q = query(
    collection(db, COL),
    where('projectId', '==', projectId)
  )
  const snap = await getDocs(q)
  const records = snap.docs.map(d => ({ id: d.id, ...d.data() }))
  // 按 date 倒序排列，最新的在最上面
  return records.sort((a, b) => {
    if (!a.date) return 1
    if (!b.date) return -1
    return b.date.localeCompare(a.date)
  })
}

// 添加沟通记录
export async function addCommunication(data) {
  const now = serverTimestamp()
  return await addDoc(collection(db, COL), {
    projectId: data.projectId,
    date: data.date || '',
    contactPerson: data.contactPerson || '',
    content: data.content || '',
    conclusion: data.conclusion || '',
    nextAction: data.nextAction || '',
    responsible: data.responsible || '',
    deadline: data.deadline || '',
    isResolved: data.isResolved || false,
    notes: data.notes || '',
    createdAt: now,
    updatedAt: now
  })
}

// 更新沟通记录
export async function updateCommunication(id, data) {
  const ref = doc(db, COL, id)
  await updateDoc(ref, {
    date: data.date || '',
    contactPerson: data.contactPerson || '',
    content: data.content || '',
    conclusion: data.conclusion || '',
    nextAction: data.nextAction || '',
    responsible: data.responsible || '',
    deadline: data.deadline || '',
    isResolved: data.isResolved || false,
    notes: data.notes || '',
    updatedAt: serverTimestamp()
  })
}

// 删除沟通记录
export async function deleteCommunication(id) {
  await deleteDoc(doc(db, COL, id))
}