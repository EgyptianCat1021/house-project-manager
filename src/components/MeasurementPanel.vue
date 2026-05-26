<template>
  <div>
    <!-- 标题栏 -->
    <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
      <h2 class="text-sm font-medium text-gray-700">测量记录</h2>
      <button
        @click="openAdd"
        class="text-xs px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        + 添加
      </button>
    </div>

    <!-- 加载中 -->
    <div v-if="loading" class="px-4 py-6 text-center text-sm text-gray-400">加载中...</div>

    <!-- 空状态 -->
    <div v-else-if="records.length === 0" class="px-4 py-6 text-center text-sm text-gray-400">
      暂无测量记录，点击右上角添加
    </div>

    <!-- 记录列表 -->
    <div v-else class="divide-y divide-gray-100">
      <div v-for="r in records" :key="r.id" class="px-4 py-3">
        <!-- 第一行：名称 + 复核状态 -->
        <div class="flex items-center justify-between mb-1">
          <span class="font-medium text-gray-800 text-sm">{{ r.measureName || '未命名' }}</span>
          <span :class="r.verified ? 'text-green-600 bg-green-50' : 'text-gray-400 bg-gray-100'"
            class="text-xs px-2 py-0.5 rounded-full">
            {{ r.verified ? '已复核' : '未复核' }}
          </span>
        </div>

        <!-- 第二行：位置 -->
        <div v-if="r.location" class="text-xs text-gray-500 mb-1">📍 {{ r.location }}</div>

        <!-- 第三行：尺寸 -->
        <div class="text-xs text-gray-600 mb-1">
          <span v-if="r.width">宽{{ r.width }}{{ r.unit }}</span>
          <span v-if="r.width && (r.height || r.depth)"> / </span>
          <span v-if="r.height">高{{ r.height }}{{ r.unit }}</span>
          <span v-if="r.height && r.depth"> / </span>
          <span v-if="r.depth">深{{ r.depth }}{{ r.unit }}</span>
        </div>

        <!-- 第四行：日期 + 测量人 -->
        <div class="text-xs text-gray-400 mb-1">
          <span v-if="r.measureDate">{{ r.measureDate }}</span>
          <span v-if="r.measureDate && r.measuredBy"> · </span>
          <span v-if="r.measuredBy">{{ r.measuredBy }}</span>
        </div>

        <!-- 第五行：备注 -->
        <div v-if="r.notes" class="text-xs text-gray-400 truncate">备注：{{ r.notes }}</div>

        <!-- 操作按钮 -->
        <div class="flex gap-3 mt-2">
          <button @click="openEdit(r)" class="text-xs text-blue-500 hover:text-blue-700">编辑</button>
          <button @click="askDelete(r)" class="text-xs text-red-400 hover:text-red-600">删除</button>
        </div>
      </div>
    </div>

    <!-- 成功/失败提示 -->
    <div v-if="toast" :class="toastError ? 'bg-red-500' : 'bg-green-500'"
      class="fixed bottom-24 left-1/2 -translate-x-1/2 text-white text-sm px-4 py-2 rounded-full shadow-lg z-50">
      {{ toast }}
    </div>

    <!-- 添加/编辑表单（底部弹出） -->
    <div v-if="showForm" class="fixed inset-0 bg-black/40 z-40" @click.self="closeForm">
      <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto">
        <div class="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <h3 class="font-semibold text-gray-900">{{ editingId ? '编辑测量记录' : '添加测量记录' }}</h3>
          <button @click="closeForm" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>

        <div class="px-4 py-4 space-y-4">
          <!-- 测量名称 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">测量对象/尺寸名称 *</label>
            <input v-model="form.measureName" type="text" placeholder="例：窗户净宽、台面开孔尺寸"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>

          <!-- 位置 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">测量位置</label>
            <input v-model="form.location" type="text" placeholder="例：西套卫北侧窗户"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>

          <!-- 单位 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">单位</label>
            <div class="flex gap-2">
              <button v-for="u in ['cm', 'mm', 'm']" :key="u"
                @click="form.unit = u"
                :class="form.unit === u ? 'bg-blue-500 text-white border-blue-500' : 'text-gray-600 border-gray-200'"
                class="flex-1 py-2 text-sm border rounded-lg">
                {{ u }}
              </button>
            </div>
          </div>

          <!-- 尺寸 -->
          <div class="grid grid-cols-3 gap-2">
            <div>
              <label class="text-xs text-gray-500 mb-1 block">宽</label>
              <input v-model.number="form.width" type="number" placeholder="—"
                class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">高</label>
              <input v-model.number="form.height" type="number" placeholder="—"
                class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">深</label>
              <input v-model.number="form.depth" type="number" placeholder="—"
                class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
          </div>

          <!-- 测量日期 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">测量日期</label>
            <input v-model="form.measureDate" type="date"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>

          <!-- 测量人 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">测量人</label>
            <input v-model="form.measuredBy" type="text" placeholder="例：甲方、乙方"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>

          <!-- 已复核 -->
          <div class="flex items-center gap-3">
            <button @click="form.verified = !form.verified"
              :class="form.verified ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'"
              class="w-6 h-6 rounded border-2 flex items-center justify-center transition-colors">
              <span v-if="form.verified" class="text-white text-xs">✓</span>
            </button>
            <span class="text-sm text-gray-700">已复核</span>
          </div>

          <!-- 备注 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">备注</label>
            <textarea v-model="form.notes" rows="3" placeholder="补充说明..."
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>

          <!-- 保存按钮 -->
          <button @click="saveForm" :disabled="saving"
            class="w-full py-3 bg-blue-500 text-white rounded-xl text-sm font-medium disabled:opacity-50">
            {{ saving ? '保存中...' : '保存' }}
          </button>

          <div class="h-4"></div>
        </div>
      </div>
    </div>

    <!-- 删除确认弹窗 -->
    <div v-if="showDeleteConfirm" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div class="bg-white rounded-2xl p-6 w-full max-w-sm">
        <h3 class="font-semibold text-gray-900 mb-2">确认删除</h3>
        <p class="text-sm text-gray-500 mb-6">确定要删除「{{ deletingRecord?.measureName }}」这条测量记录吗？</p>
        <div class="flex gap-3">
          <button @click="showDeleteConfirm = false" class="flex-1 py-2 text-sm border border-gray-300 rounded-lg">取消</button>
          <button @click="doDelete" :disabled="deleting"
            class="flex-1 py-2 text-sm text-white bg-red-500 rounded-lg disabled:opacity-50">
            {{ deleting ? '删除中...' : '确认删除' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  getMeasurementsByProject,
  addMeasurement,
  updateMeasurement,
  deleteMeasurement
} from '../firebase/measurements'

const props = defineProps({
  projectId: { type: String, required: true }
})

const records = ref([])
const loading = ref(true)
const saving = ref(false)
const deleting = ref(false)
const showForm = ref(false)
const showDeleteConfirm = ref(false)
const editingId = ref(null)
const deletingRecord = ref(null)
const toast = ref('')
const toastError = ref(false)

const today = new Date().toISOString().split('T')[0]

const emptyForm = () => ({
  measureName: '',
  location: '',
  width: null,
  height: null,
  depth: null,
  unit: 'cm',
  measureDate: today,
  measuredBy: '',
  verified: false,
  notes: ''
})

const form = ref(emptyForm())

async function loadRecords() {
  loading.value = true
  try {
    records.value = await getMeasurementsByProject(props.projectId)
  } catch (e) {
    showToast('加载失败：' + e.message, true)
  } finally {
    loading.value = false
  }
}

function openAdd() {
  editingId.value = null
  form.value = emptyForm()
  showForm.value = true
}

function openEdit(r) {
  editingId.value = r.id
  form.value = {
    measureName: r.measureName || '',
    location: r.location || '',
    width: r.width || null,
    height: r.height || null,
    depth: r.depth || null,
    unit: r.unit || 'cm',
    measureDate: r.measureDate || today,
    measuredBy: r.measuredBy || '',
    verified: r.verified || false,
    notes: r.notes || ''
  }
  showForm.value = true
}

function closeForm() {
  showForm.value = false
}

async function saveForm() {
  if (!form.value.measureName.trim()) {
    showToast('请填写测量对象/尺寸名称', true)
    return
  }
  saving.value = true
  try {
    if (editingId.value) {
      await updateMeasurement(editingId.value, form.value)
    } else {
      await addMeasurement({ ...form.value, projectId: props.projectId })
    }
    showForm.value = false
    await loadRecords()
    showToast(editingId.value ? '已更新' : '已添加')
  } catch (e) {
    showToast('保存失败：' + e.message, true)
  } finally {
    saving.value = false
  }
}

function askDelete(r) {
  deletingRecord.value = r
  showDeleteConfirm.value = true
}

async function doDelete() {
  deleting.value = true
  try {
    await deleteMeasurement(deletingRecord.value.id)
    showDeleteConfirm.value = false
    await loadRecords()
    showToast('已删除')
  } catch (e) {
    showToast('删除失败：' + e.message, true)
  } finally {
    deleting.value = false
  }
}

function showToast(msg, isError = false) {
  toast.value = msg
  toastError.value = isError
  setTimeout(() => { toast.value = '' }, 2500)
}

onMounted(() => {
  loadRecords()
})
</script>