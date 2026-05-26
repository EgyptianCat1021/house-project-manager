<template>
  <div>
    <!-- 标题栏 -->
    <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
      <h2 class="text-sm font-medium text-gray-700">沟通记录</h2>
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
      暂无沟通记录，点击右上角添加
    </div>

    <!-- 记录列表 -->
    <div v-else class="divide-y divide-gray-100">
      <div v-for="r in records" :key="r.id" class="px-4 py-3">

        <!-- 第一行：日期 + 沟通对象 + 是否落实 -->
        <div class="flex items-center justify-between mb-1">
          <div class="flex items-center gap-2">
            <span class="text-xs text-gray-400">{{ r.date || '日期未填' }}</span>
            <span v-if="r.contactPerson" class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{{ r.contactPerson }}</span>
          </div>
          <span :class="r.isResolved ? 'text-green-600 bg-green-50' : 'text-orange-500 bg-orange-50'"
            class="text-xs px-2 py-0.5 rounded-full">
            {{ r.isResolved ? '已落实' : '未落实' }}
          </span>
        </div>

        <!-- 沟通内容 -->
        <div v-if="r.content" class="text-sm text-gray-800 mb-1 leading-relaxed">{{ r.content }}</div>

        <!-- 沟通结论 -->
        <div v-if="r.conclusion" class="text-xs text-blue-600 mb-1">
          结论：{{ r.conclusion }}
        </div>

        <!-- 下一步动作 -->
        <div v-if="r.nextAction" class="text-xs text-gray-600 mb-1">
          → {{ r.nextAction }}
          <span v-if="r.responsible" class="text-gray-400">（{{ r.responsible }}）</span>
          <span v-if="r.deadline" class="text-gray-400"> · 截止 {{ r.deadline }}</span>
        </div>

        <!-- 备注 -->
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
          <h3 class="font-semibold text-gray-900">{{ editingId ? '编辑沟通记录' : '添加沟通记录' }}</h3>
          <button @click="closeForm" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>

        <div class="px-4 py-4 space-y-4">

          <!-- 沟通日期 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">沟通日期</label>
            <input v-model="form.date" type="date"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>

          <!-- 沟通对象 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">沟通对象 *</label>
            <input v-model="form.contactPerson" type="text" placeholder="例：乙方、师傅、供应商、家人"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>

          <!-- 沟通内容 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">沟通内容 *</label>
            <textarea v-model="form.content" rows="3" placeholder="本次沟通的内容..."
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>

          <!-- 沟通结论 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">沟通结论</label>
            <textarea v-model="form.conclusion" rows="2" placeholder="达成了什么结论？"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>

          <!-- 下一步动作 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">下一步动作</label>
            <input v-model="form.nextAction" type="text" placeholder="接下来要做什么？"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
          </div>

          <!-- 负责人 + 截止日期 -->
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs text-gray-500 mb-1 block">负责人</label>
              <input v-model="form.responsible" type="text" placeholder="例：甲方、乙方"
                class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">截止日期</label>
              <input v-model="form.deadline" type="date"
                class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400" />
            </div>
          </div>

          <!-- 已落实 -->
          <div class="flex items-center gap-3">
            <button @click="form.isResolved = !form.isResolved"
              :class="form.isResolved ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'"
              class="w-6 h-6 rounded border-2 flex items-center justify-center transition-colors">
              <span v-if="form.isResolved" class="text-white text-xs">✓</span>
            </button>
            <span class="text-sm text-gray-700">已落实</span>
          </div>

          <!-- 备注 -->
          <div>
            <label class="text-xs text-gray-500 mb-1 block">备注</label>
            <textarea v-model="form.notes" rows="2" placeholder="其他补充..."
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
        <p class="text-sm text-gray-500 mb-6">确定要删除这条沟通记录吗？</p>
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
  getCommunicationsByProject,
  addCommunication,
  updateCommunication,
  deleteCommunication
} from '../firebase/communications'

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
  date: today,
  contactPerson: '',
  content: '',
  conclusion: '',
  nextAction: '',
  responsible: '',
  deadline: '',
  isResolved: false,
  notes: ''
})

const form = ref(emptyForm())

async function loadRecords() {
  loading.value = true
  try {
    records.value = await getCommunicationsByProject(props.projectId)
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
    date: r.date || today,
    contactPerson: r.contactPerson || '',
    content: r.content || '',
    conclusion: r.conclusion || '',
    nextAction: r.nextAction || '',
    responsible: r.responsible || '',
    deadline: r.deadline || '',
    isResolved: r.isResolved || false,
    notes: r.notes || ''
  }
  showForm.value = true
}

function closeForm() {
  showForm.value = false
}

async function saveForm() {
  if (!form.value.contactPerson.trim()) {
    showToast('请填写沟通对象', true)
    return
  }
  if (!form.value.content.trim()) {
    showToast('请填写沟通内容', true)
    return
  }
  saving.value = true
  try {
    if (editingId.value) {
      await updateCommunication(editingId.value, form.value)
    } else {
      await addCommunication({ ...form.value, projectId: props.projectId })
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
    await deleteCommunication(deletingRecord.value.id)
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