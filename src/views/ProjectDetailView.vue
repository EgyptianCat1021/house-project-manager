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
          <h1 class="font-semibold text-gray-900 truncate max-w-[200px]">{{ project?.name || '项目详情' }}</h1>
        </div>
        <div class="flex items-center gap-2">
          <button v-if="!editing" @click="startEdit"
            class="px-3 py-1.5 text-sm text-blue-500 border border-blue-300 rounded-lg hover:bg-blue-50">编辑</button>
          <template v-if="editing">
            <button @click="cancelEdit" class="px-3 py-1.5 text-sm text-gray-500 border border-gray-300 rounded-lg">取消</button>
            <button @click="saveEdit" :disabled="saving"
              class="px-3 py-1.5 text-sm text-white bg-blue-500 rounded-lg disabled:opacity-50">
              {{ saving ? '保存中...' : '保存' }}
            </button>
          </template>
        </div>
      </div>
    </header>

    <div v-if="loading" class="flex justify-center py-16">
      <div class="text-gray-400 text-sm">加载中...</div>
    </div>

    <div v-else-if="!project" class="flex flex-col items-center py-16 text-gray-400">
      <div class="text-4xl mb-3">🔍</div>
      <div class="text-sm">找不到该项目</div>
    </div>

    <div v-else class="max-w-3xl mx-auto px-4 py-4 space-y-4">

      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">基础信息</h2>
        </div>
        <div class="divide-y divide-gray-100">
          <FieldRow label="序号" :value="project.seq" :editing="false" />
          <FieldRow label="项目名称" field="name" :value="form.name" :editing="editing" @update="form.name = $event" type="text" />
          <FieldRow label="区域" field="area" :value="form.area" :editing="editing" @update="form.area = $event" type="select" :options="AREA_OPTIONS" />
          <FieldRow label="属性/类型" field="category" :value="form.category" :editing="editing" @update="form.category = $event" type="combobox" :options="CATEGORY_OPTIONS" />
          <FieldRow label="数量" field="quantity" :value="form.quantity" :editing="editing" @update="form.quantity = $event" type="number" />
          <FieldRow label="责任方" field="responsible" :value="form.responsible" :editing="editing" @update="form.responsible = $event" type="select" :options="RESPONSIBLE_OPTIONS" />
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">进度跟踪</h2>
        </div>
        <div class="divide-y divide-gray-100">
          <FieldRow label="优先级" field="priority" :value="form.priority" :editing="editing" @update="form.priority = $event" type="select" :options="PRIORITY_OPTIONS" :colorMap="PRIORITY_COLORS" />
          <FieldRow label="当前状态" field="status" :value="form.status" :editing="editing" @update="form.status = $event" type="select" :options="STATUS_OPTIONS" :colorMap="STATUS_COLORS" />
          <FieldRow label="下一步动作" field="nextAction" :value="form.nextAction" :editing="editing" @update="form.nextAction = $event" type="textarea" />
          <FieldRow label="计划完成日期" field="plannedDate" :value="form.plannedDate" :editing="editing" @update="form.plannedDate = $event" type="date" />
          <FieldRow label="实际完成日期" field="completedDate" :value="form.completedDate" :editing="editing" @update="form.completedDate = $event" type="date" />
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">尺寸与规格</h2>
        </div>
        <div class="divide-y divide-gray-100">
          <FieldRow label="尺寸/规格" field="dimension" :value="form.dimension" :editing="editing" @update="form.dimension = $event" type="text" />
          <FieldRow label="测量日期" field="measureDate" :value="form.measureDate" :editing="editing" @update="form.measureDate = $event" type="date" />
          <FieldRow label="测量人" field="measuredBy" :value="form.measuredBy" :editing="editing" @update="form.measuredBy = $event" type="text" />
          <FieldRow label="品牌/型号" field="brand" :value="form.brand" :editing="editing" @update="form.brand = $event" type="text" />
          <FieldRow label="颜色/材质" field="colorMaterial" :value="form.colorMaterial" :editing="editing" @update="form.colorMaterial = $event" type="text" />
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">费用与验收</h2>
        </div>
        <div class="divide-y divide-gray-100">
          <FieldRow label="预算金额" field="budgetAmount" :value="form.budgetAmount" :editing="editing" @update="form.budgetAmount = $event" type="number" />
          <FieldRow label="实际金额" field="actualAmount" :value="form.actualAmount" :editing="editing" @update="form.actualAmount = $event" type="number" />
          <FieldRow label="付款状态" field="paymentStatus" :value="form.paymentStatus" :editing="editing" @update="form.paymentStatus = $event" type="select" :options="PAYMENT_OPTIONS" />
          <FieldRow label="验收状态" field="acceptanceStatus" :value="form.acceptanceStatus" :editing="editing" @update="form.acceptanceStatus = $event" type="select" :options="ACCEPTANCE_OPTIONS" />
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">备注</h2>
        </div>
        <div class="divide-y divide-gray-100">
          <FieldRow label="备注/沟通记录" field="notes" :value="form.notes" :editing="editing" @update="form.notes = $event" type="textarea" />
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100 bg-gray-50">
          <h2 class="text-sm font-medium text-gray-700">图片与附件（预留）</h2>
        </div>
        <div class="divide-y divide-gray-100">
          <FieldRow label="图片链接" field="imageLinks" :value="form.imageLinks" :editing="editing" @update="form.imageLinks = $event" type="text" />
          <FieldRow label="附件说明" field="attachmentNotes" :value="form.attachmentNotes" :editing="editing" @update="form.attachmentNotes = $event" type="text" />
          <FieldRow label="照片编号" field="photoReference" :value="form.photoReference" :editing="editing" @update="form.photoReference = $event" type="text" />
        </div>
      </div>

      <div class="pb-8">
        <button @click="confirmDelete"
          class="w-full py-3 text-sm text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-colors">
          删除此项目
        </button>
      </div>

    </div>

    <div v-if="showDeleteConfirm" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div class="bg-white rounded-2xl p-6 w-full max-w-sm">
        <h3 class="font-semibold text-gray-900 mb-2">确认删除</h3>
        <p class="text-sm text-gray-500 mb-6">确定要删除「{{ project.name }}」吗？此操作不可恢复。</p>
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectsStore } from '../stores/projects.js'
import { updateProject, deleteProject } from '../firebase/projects.js'
import {
  STATUS_OPTIONS, PRIORITY_OPTIONS, RESPONSIBLE_OPTIONS,
  AREA_OPTIONS, CATEGORY_OPTIONS, PAYMENT_OPTIONS, ACCEPTANCE_OPTIONS,
  PRIORITY_COLORS, STATUS_COLORS
} from '../constants/options.js'
import FieldRow from '../components/FieldRow.vue'

const route = useRoute()
const router = useRouter()
const store = useProjectsStore()

const loading = ref(true)
const editing = ref(false)
const saving = ref(false)
const deleting = ref(false)
const showDeleteConfirm = ref(false)

const project = computed(() => store.projects.find(p => p.id === route.params.id))
const form = ref({})

function initForm() {
  if (project.value) {
    form.value = { ...project.value }
    loading.value = false
  }
}

watch(project, (val) => {
  if (val && !editing.value) initForm()
  if (val) loading.value = false
}, { immediate: true })

onMounted(() => {
  if (store.projects.length === 0) {
    store.startListening()
  } else {
    loading.value = false
  }
})

function startEdit() {
  form.value = { ...project.value }
  editing.value = true
}

function cancelEdit() {
  editing.value = false
  form.value = { ...project.value }
}

async function saveEdit() {
  saving.value = true
  try {
    const { id, createdAt, updatedAt, ...data } = form.value
    await updateProject(project.value.id, data)
    editing.value = false
  } catch (e) {
    alert('保存失败：' + e.message)
  } finally {
    saving.value = false
  }
}

function confirmDelete() {
  showDeleteConfirm.value = true
}

async function doDelete() {
  deleting.value = true
  try {
    await deleteProject(project.value.id)
    router.push('/projects')
  } catch (e) {
    alert('删除失败：' + e.message)
  } finally {
    deleting.value = false
    showDeleteConfirm.value = false
  }
}
</script>