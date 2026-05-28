<template>
  <div class="min-h-screen bg-gray-50">

    <!-- 顶部导航 -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
        <button @click="$router.push('/')" class="flex items-center gap-1 text-gray-500 hover:text-gray-800">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span class="text-sm">返回</span>
        </button>
        <h1 class="font-semibold text-gray-900">数据导出备份</h1>
      </div>
    </header>

    <div class="max-w-2xl mx-auto px-4 py-4 space-y-4">

      <!-- 加载中 -->
      <div v-if="loading" class="bg-white rounded-xl border border-gray-200 px-4 py-8 text-center text-sm text-gray-400">
        正在读取数据...
      </div>

      <!-- 错误提示 -->
      <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-xl px-4 py-4 text-sm text-red-600">
        读取数据失败：{{ error }}
      </div>

      <template v-else>

        <!-- 当前数据概览 -->
        <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
            <h2 class="text-sm font-medium text-gray-700">当前可导出数据</h2>
          </div>
          <div class="divide-y divide-gray-100">
            <div class="px-4 py-3 flex items-center justify-between">
              <span class="text-sm text-gray-600">📋 项目清单</span>
              <span class="text-sm font-medium text-gray-900">{{ projects.length }} 条</span>
            </div>
            <div class="px-4 py-3 flex items-center justify-between">
              <span class="text-sm text-gray-600">📐 尺寸记录</span>
              <span class="text-sm font-medium text-gray-900">{{ measurements.length }} 条</span>
            </div>
            <div class="px-4 py-3 flex items-center justify-between">
              <span class="text-sm text-gray-600">💬 沟通记录</span>
              <span class="text-sm font-medium text-gray-900">{{ communications.length }} 条</span>
            </div>
          </div>
        </div>

        <!-- JSON 全量导出 -->
        <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
            <h2 class="text-sm font-medium text-gray-700">JSON 全量备份</h2>
            <p class="text-xs text-gray-400 mt-0.5">包含所有项目、尺寸记录、沟通记录，可用于完整备份</p>
          </div>
          <div class="px-4 py-4">
            <button @click="exportJSON"
              class="w-full py-3 bg-blue-500 text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors">
              导出全量备份 JSON
            </button>
            <p class="text-xs text-gray-400 mt-2 text-center">文件名：house-project-backup-{{ today }}.json</p>
          </div>
        </div>

        <!-- CSV 分项导出 -->
        <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
            <h2 class="text-sm font-medium text-gray-700">CSV 分项导出</h2>
            <p class="text-xs text-gray-400 mt-0.5">可用 Excel 直接打开，字段名为中文</p>
          </div>
          <div class="px-4 py-4 space-y-3">
            <button @click="exportProjectsCSV"
              class="w-full py-3 border border-blue-300 text-blue-500 rounded-xl text-sm font-medium hover:bg-blue-50 transition-colors">
              导出项目清单 CSV（{{ projects.length }} 条）
            </button>
            <button @click="exportMeasurementsCSV"
              class="w-full py-3 border border-blue-300 text-blue-500 rounded-xl text-sm font-medium hover:bg-blue-50 transition-colors">
              导出尺寸记录 CSV（{{ measurements.length }} 条）
            </button>
            <button @click="exportCommunicationsCSV"
              class="w-full py-3 border border-blue-300 text-blue-500 rounded-xl text-sm font-medium hover:bg-blue-50 transition-colors">
              导出沟通记录 CSV（{{ communications.length }} 条）
            </button>
          </div>
        </div>

        <!-- 说明 -->
        <div class="bg-gray-50 rounded-xl border border-gray-200 px-4 py-4">
          <h2 class="text-sm font-medium text-gray-700 mb-2">说明</h2>
          <ul class="text-xs text-gray-500 space-y-1">
            <li>· JSON 备份包含所有数据，适合完整备份和恢复</li>
            <li>· CSV 文件可直接用 Excel 打开查看</li>
            <li>· 建议定期导出备份，保存到本地或云端</li>
            <li>· 导出的数据不会影响 Firebase 中的原始数据</li>
          </ul>
        </div>

      </template>

      <!-- 成功提示 -->
      <div v-if="toast"
        class="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded-full shadow-lg z-50">
        {{ toast }}
      </div>

      <div class="h-8"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchProjects } from '../firebase/projects'
import { getMeasurementsByProject } from '../firebase/measurements'
import { getCommunicationsByProject } from '../firebase/communications'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

const projects = ref([])
const measurements = ref([])
const communications = ref([])
const loading = ref(true)
const error = ref('')
const toast = ref('')

const today = new Date().toISOString().split('T')[0]

// 直接从 Firebase 读取所有测量记录
async function fetchAllMeasurements() {
  const snap = await getDocs(collection(db, 'measurements'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

// 直接从 Firebase 读取所有沟通记录
async function fetchAllCommunications() {
  const snap = await getDocs(collection(db, 'communications'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

onMounted(async () => {
  try {
    const [p, m, c] = await Promise.all([
      fetchProjects(),
      fetchAllMeasurements(),
      fetchAllCommunications()
    ])
    projects.value = p
    measurements.value = m
    communications.value = c
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})

// 下载文件工具
function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function showToast(msg) {
  toast.value = msg
  setTimeout(() => toast.value = '', 2500)
}

// JSON 全量导出
function exportJSON() {
  const data = {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    projects: projects.value,
    measurements: measurements.value,
    communications: communications.value
  }
  const json = JSON.stringify(data, null, 2)
  downloadFile(json, `house-project-backup-${today}.json`, 'application/json')
  showToast('✅ JSON 备份已导出')
}

// CSV 工具：转义字段
function escapeCSV(val) {
  if (val === null || val === undefined) return ''
  const str = String(val)
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"'
  }
  return str
}

function toCSV(headers, rows) {
  const BOM = '\uFEFF' // UTF-8 BOM，解决 Excel 中文乱码
  const headerLine = headers.map(h => escapeCSV(h.label)).join(',')
  const dataLines = rows.map(row =>
    headers.map(h => escapeCSV(row[h.key])).join(',')
  )
  return BOM + [headerLine, ...dataLines].join('\n')
}

// 导出项目清单 CSV
function exportProjectsCSV() {
  const headers = [
    { key: 'seq', label: '序号' },
    { key: 'name', label: '项目名称' },
    { key: 'area', label: '区域' },
    { key: 'category', label: '属性/类型' },
    { key: 'quantity', label: '数量' },
    { key: 'responsible', label: '责任方' },
    { key: 'priority', label: '优先级' },
    { key: 'status', label: '当前状态' },
    { key: 'nextAction', label: '下一步动作' },
    { key: 'plannedDate', label: '计划完成日期' },
    { key: 'completedDate', label: '实际完成日期' },
    { key: 'dimension', label: '尺寸/规格' },
    { key: 'brand', label: '品牌/型号' },
    { key: 'colorMaterial', label: '颜色/材质' },
    { key: 'budgetAmount', label: '预算金额' },
    { key: 'actualAmount', label: '实际金额' },
    { key: 'paymentStatus', label: '付款状态' },
    { key: 'acceptanceStatus', label: '验收状态' },
    { key: 'notes', label: '备注' }
  ]
  const csv = toCSV(headers, projects.value)
  downloadFile(csv, `projects-${today}.csv`, 'text/csv;charset=utf-8')
  showToast('✅ 项目清单 CSV 已导出')
}

// 导出尺寸记录 CSV
function exportMeasurementsCSV() {
  const headers = [
    { key: 'projectId', label: '关联项目ID' },
    { key: 'measureName', label: '测量对象/尺寸名称' },
    { key: 'location', label: '测量位置' },
    { key: 'width', label: '宽' },
    { key: 'height', label: '高' },
    { key: 'depth', label: '深' },
    { key: 'unit', label: '单位' },
    { key: 'measureDate', label: '测量日期' },
    { key: 'measuredBy', label: '测量人' },
    { key: 'verified', label: '是否复核' },
    { key: 'notes', label: '备注' }
  ]
  const rows = measurements.value.map(m => ({
    ...m,
    verified: m.verified ? '已复核' : '未复核'
  }))
  const csv = toCSV(headers, rows)
  downloadFile(csv, `measurements-${today}.csv`, 'text/csv;charset=utf-8')
  showToast('✅ 尺寸记录 CSV 已导出')
}

// 导出沟通记录 CSV
function exportCommunicationsCSV() {
  const headers = [
    { key: 'projectId', label: '关联项目ID' },
    { key: 'date', label: '沟通日期' },
    { key: 'contactPerson', label: '沟通对象' },
    { key: 'content', label: '沟通内容' },
    { key: 'conclusion', label: '沟通结论' },
    { key: 'nextAction', label: '下一步动作' },
    { key: 'responsible', label: '负责人' },
    { key: 'deadline', label: '截止日期' },
    { key: 'isResolved', label: '是否已落实' },
    { key: 'notes', label: '备注' }
  ]
  const rows = communications.value.map(c => ({
    ...c,
    isResolved: c.isResolved ? '已落实' : '未落实'
  }))
  const csv = toCSV(headers, rows)
  downloadFile(csv, `communications-${today}.csv`, 'text/csv;charset=utf-8')
  showToast('✅ 沟通记录 CSV 已导出')
}
</script>