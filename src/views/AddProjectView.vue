<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <button @click="$router.push('/projects')" class="text-gray-400 hover:text-gray-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 class="font-semibold text-gray-900">新增项目</h1>
        </div>
        <button @click="handleSubmit" :disabled="saving || !form.name || !form.area"
          class="px-3 py-1.5 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed">
          {{ saving ? '保存中...' : '保存' }}
        </button>
      </div>
    </header>

    <div class="max-w-3xl mx-auto px-4 py-4 space-y-4">

      <div v-if="errorMsg" class="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
        {{ errorMsg }}
      </div>

      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">基础信息 <span class="text-red-400">*必填</span></h2>
        </div>
        <div class="divide-y divide-gray-100">
          <div class="flex items-center px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0">项目名称 <span class="text-red-400">*</span></label>
            <input v-model="form.name" type="text" placeholder="请输入项目名称"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400" />
          </div>
          <div class="flex items-center px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0">区域 <span class="text-red-400">*</span></label>
            <select v-model="form.area"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400 bg-white">
              <option value="">请选择区域</option>
              <option v-for="a in AREA_OPTIONS" :key="a" :value="a">{{ a }}</option>
            </select>
          </div>
          <div class="flex items-center px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0">属性/类型</label>
            <input v-model="form.category" type="text" list="category-list" placeholder="可输入或从下拉选择"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400" />
            <datalist id="category-list">
              <option v-for="c in CATEGORY_OPTIONS" :key="c" :value="c" />
            </datalist>
          </div>
          <div class="flex items-center px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0">数量</label>
            <input v-model.number="form.quantity" type="number" min="1"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400" />
          </div>
          <div class="flex items-center px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0">责任方 <span class="text-red-400">*</span></label>
            <select v-model="form.responsible"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400 bg-white">
              <option value="">请选择责任方</option>
              <option v-for="r in RESPONSIBLE_OPTIONS" :key="r" :value="r">{{ r }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">进度信息</h2>
        </div>
        <div class="divide-y divide-gray-100">
          <div class="flex items-center px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0">优先级</label>
            <select v-model="form.priority"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400 bg-white">
              <option v-for="p in PRIORITY_OPTIONS" :key="p" :value="p">{{ p }}</option>
            </select>
          </div>
          <div class="flex items-center px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0">当前状态</label>
            <select v-model="form.status"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400 bg-white">
              <option v-for="s in STATUS_OPTIONS" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div class="flex items-start px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0 pt-1">下一步动作</label>
            <textarea v-model="form.nextAction" rows="3" placeholder="写清楚谁在什么时候做什么"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400 resize-none"></textarea>
          </div>
          <div class="flex items-center px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0">计划完成日期</label>
            <input v-model="form.plannedDate" type="date"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400" />
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">费用信息</h2>
        </div>
        <div class="divide-y divide-gray-100">
          <div class="flex items-center px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0">预算金额</label>
            <input v-model.number="form.budgetAmount" type="number" placeholder="元"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400" />
          </div>
          <div class="flex items-center px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0">付款状态</label>
            <select v-model="form.paymentStatus"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400 bg-white">
              <option v-for="p in PAYMENT_OPTIONS" :key="p" :value="p">{{ p }}</option>
            </select>
          </div>
          <div class="flex items-center px-4 py-3 gap-3">
            <label class="text-sm text-gray-500 w-24 shrink-0">验收状态</label>
            <select v-model="form.acceptanceStatus"
              class="flex-1 text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400 bg-white">
              <option v-for="a in ACCEPTANCE_OPTIONS" :key="a" :value="a">{{ a }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">备注</h2>
        </div>
        <div class="px-4 py-3">
          <textarea v-model="form.notes" rows="3" placeholder="备注或沟通记录"
            class="w-full text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400 resize-none"></textarea>
        </div>
      </div>

      <div class="h-8"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addProject, getProjectCount } from '../firebase/projects.js'
import {
  AREA_OPTIONS, CATEGORY_OPTIONS, RESPONSIBLE_OPTIONS,
  PRIORITY_OPTIONS, STATUS_OPTIONS, PAYMENT_OPTIONS, ACCEPTANCE_OPTIONS
} from '../constants/options.js'

const router = useRouter()
const saving = ref(false)
const errorMsg = ref('')

const form = ref({
  name: '',
  area: '',
  category: '',
  quantity: 1,
  responsible: '',
  priority: '中',
  status: '待确认',
  nextAction: '',
  plannedDate: null,
  completedDate: null,
  dimension: null,
  measureDate: null,
  measuredBy: null,
  brand: null,
  colorMaterial: null,
  budgetAmount: null,
  actualAmount: null,
  paymentStatus: '未付款',
  acceptanceStatus: '不适用',
  notes: null,
  imageLinks: null,
  attachmentNotes: null,
  photoReference: null
})

async function handleSubmit() {
  if (!form.value.name || !form.value.area) {
    errorMsg.value = '请填写项目名称和区域'
    return
  }
  saving.value = true
  errorMsg.value = ''
  try {
    const count = await getProjectCount()
    const data = { ...form.value, seq: count + 1 }
    const docRef = await addProject(data)
    router.push(`/projects/${docRef.id}`)
  } catch (e) {
    errorMsg.value = '保存失败：' + e.message
  } finally {
    saving.value = false
  }
}
</script>