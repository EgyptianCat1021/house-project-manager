import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  writeBatch
} from 'firebase/firestore'
import { db } from './config.js'

const COLLECTION = 'projects'

// 实时监听项目列表
export function subscribeProjects(callback) {
  const q = query(collection(db, COLLECTION), orderBy('seq', 'asc'))
  return onSnapshot(q, (snapshot) => {
    const projects = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    callback(projects)
  })
}

// 获取所有项目（一次性）
export async function fetchProjects() {
  const q = query(collection(db, COLLECTION), orderBy('seq', 'asc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

// 新增项目
export async function addProject(data) {
  return await addDoc(collection(db, COLLECTION), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })
}

// 更新项目
export async function updateProject(id, data) {
  const ref = doc(db, COLLECTION, id)
  return await updateDoc(ref, {
    ...data,
    updatedAt: serverTimestamp()
  })
}

// 删除项目
export async function deleteProject(id) {
  return await deleteDoc(doc(db, COLLECTION, id))
}

// 批量导入项目（用于初始化100条数据）
export async function batchImportProjects(projects) {
  const BATCH_SIZE = 400 // Firestore 每批最多500条
  const batches = []

  for (let i = 0; i < projects.length; i += BATCH_SIZE) {
    const batch = writeBatch(db)
    const chunk = projects.slice(i, i + BATCH_SIZE)
    chunk.forEach(project => {
      const ref = doc(collection(db, COLLECTION))
      batch.set(ref, {
        ...project,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      })
    })
    batches.push(batch)
  }

  for (const batch of batches) {
    await batch.commit()
  }
}

// 清空所有项目
export async function clearAllProjects() {
  const snapshot = await getDocs(collection(db, COLLECTION))
  const BATCH_SIZE = 400
  const docs = snapshot.docs

  for (let i = 0; i < docs.length; i += BATCH_SIZE) {
    const batch = writeBatch(db)
    docs.slice(i, i + BATCH_SIZE).forEach(d => batch.delete(d.ref))
    await batch.commit()
  }
}

// 获取项目数量
export async function getProjectCount() {
  const snapshot = await getDocs(collection(db, COLLECTION))
  return snapshot.size
}