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

const COL = 'measurements'

// 获取某项目的所有测量记录
export async function getMeasurementsByProject(projectId) {
  const q = query(
  collection(db, COL),
  where('projectId', '==', projectId)
)
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

// 添加测量记录
export async function addMeasurement(data) {
  const now = serverTimestamp()
  return await addDoc(collection(db, COL), {
    projectId: data.projectId,
    measureName: data.measureName || '',
    location: data.location || '',
    width: data.width || null,
    height: data.height || null,
    depth: data.depth || null,
    unit: data.unit || 'cm',
    measureDate: data.measureDate || '',
    measuredBy: data.measuredBy || '',
    verified: data.verified || false,
    notes: data.notes || '',
    createdAt: now,
    updatedAt: now
  })
}

// 更新测量记录
export async function updateMeasurement(id, data) {
  const ref = doc(db, COL, id)
  await updateDoc(ref, {
    measureName: data.measureName || '',
    location: data.location || '',
    width: data.width || null,
    height: data.height || null,
    depth: data.depth || null,
    unit: data.unit || 'cm',
    measureDate: data.measureDate || '',
    measuredBy: data.measuredBy || '',
    verified: data.verified || false,
    notes: data.notes || '',
    updatedAt: serverTimestamp()
  })
}

// 删除测量记录
export async function deleteMeasurement(id) {
  await deleteDoc(doc(db, COL, id))
}