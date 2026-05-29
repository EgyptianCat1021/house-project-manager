<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 顶部导航 -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <button @click="$router.push('/')" class="text-gray-400 hover:text-gray-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 class="font-semibold text-gray-900">合同与付款管理</h1>
        </div>
      </div>
    </header>

    <!-- Tab 切换 -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-5xl mx-auto px-4 flex">
        <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key"
          :class="['px-4 py-3 text-sm font-medium border-b-2 transition-colors', activeTab === tab.key ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']">
          {{ tab.label }}
        </button>
      </div>
    </div>

    <!-- 提示消息 -->
    <div v-if="toast" class="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg text-sm text-white shadow-lg transition-all"
      :class="toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'">
      {{ toast.message }}
    </div>

    <div class="max-w-5xl mx-auto px-4 py-4">

      <!-- ── Tab 1：合同概览 ── -->
      <div v-if="activeTab === 'overview'">
        <div v-if="loadingContract" class="text-center py-16 text-gray-400 text-sm">加载中...</div>
        <div v-else-if="contract" class="space-y-4">
          <!-- 金额汇总卡片 -->
          <div class="bg-white rounded-xl border border-gray-200 p-4 space-y-3">
            <h2 class="text-sm font-medium text-gray-700 mb-3">💰 金额汇总</h2>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-gray-50 rounded-lg p-3">
                <div class="text-xs text-gray-400 mb-1">原合同金额</div>
                <div class="text-lg font-bold text-gray-800">¥{{ formatAmount(contract.originalAmount) }}</div>
              </div>
              <div class="bg-blue-50 rounded-lg p-3">
                <div class="text-xs text-gray-400 mb-1">合同调整合计</div>
                <div class="text-lg font-bold" :class="totalAdjustment >= 0 ? 'text-blue-600' : 'text-red-500'">
                  {{ totalAdjustment >= 0 ? '+' : '' }}¥{{ formatAmount(totalAdjustment) }}
                </div>
              </div>
              <div class="bg-green-50 rounded-lg p-3">
                <div class="text-xs text-gray-400 mb-1">调整后合同金额</div>
                <div class="text-lg font-bold text-green-700">¥{{ formatAmount(adjustedAmount) }}</div>
              </div>
              <div class="bg-orange-50 rounded-lg p-3">
                <div class="text-xs text-gray-400 mb-1">已支付金额</div>
                <div class="text-lg font-bold text-orange-600">¥{{ formatAmount(totalPaid) }}</div>
              </div>
            </div>
            <div class="bg-red-50 rounded-lg p-3">
              <div class="text-xs text-gray-400 mb-1">尚未支付金额</div>
              <div class="text-2xl font-bold text-red-600">¥{{ formatAmount(unpaidAmount) }}</div>
            </div>
          </div>

          <!-- 合同基本信息 -->
          <div class="bg-white rounded-xl border border-gray-200 p-4">
            <h2 class="text-sm font-medium text-gray-700 mb-3">📋 合同基本信息</h2>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between py-1 border-b border-gray-50">
                <span class="text-gray-500">合同编号</span>
                <span class="text-gray-800 font-medium">{{ contract.contractNo }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-gray-50">
                <span class="text-gray-500">合同名称</span>
                <span class="text-gray-800">{{ contract.contractName }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-gray-50">
                <span class="text-gray-500">签订日期</span>
                <span class="text-gray-800">{{ contract.signDate }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-gray-50">
                <span class="text-gray-500">原计划竣工日期</span>
                <span class="text-gray-800">{{ contract.plannedCompletionDate }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-gray-50">
                <span class="text-gray-500">原工期</span>
                <span class="text-gray-800">{{ contract.originalDuration }} 天</span>
              </div>
              <div class="flex justify-between py-1 border-b border-gray-50">
                <span class="text-gray-500">补充协议日期</span>
                <span class="text-gray-800">{{ contract.supplementDate }}</span>
              </div>
              <div class="flex justify-between py-1">
                <span class="text-gray-500">付款节点</span>
                <span class="text-gray-800">{{ contract.paymentStages?.join('、') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Tab 2：调整记录 ── -->
      <div v-if="activeTab === 'adjustments'">
        <div class="flex justify-between items-center mb-3">
          <span class="text-sm text-gray-500">共 {{ adjustments.length }} 条记录</span>
          <button @click="openAdjustmentForm()" class="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">+ 新增</button>
        </div>

        <div v-if="adjustments.length === 0" class="text-center py-16 text-gray-400">
          <div class="text-4xl mb-3">📝</div>
          <div class="text-sm">暂无调整记录</div>
        </div>

        <div v-else class="space-y-3">
          <div v-for="adj in adjustments" :key="adj.id" class="bg-white rounded-xl border border-gray-200 p-4">
            <div class="flex items-start justify-between gap-2 mb-2">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-medium text-gray-900">{{ adj.title }}</span>
                <span :class="['text-xs px-2 py-0.5 rounded-full', statusColors[adj.status] || 'bg-gray-100 text-gray-600']">{{ adj.status }}</span>
                <span :class="['text-xs px-2 py-0.5 rounded-full', typeColors[adj.type] || 'bg-gray-100 text-gray-600']">{{ adj.type }}</span>
              </div>
              <span :class="['text-base font-bold shrink-0', adj.amount >= 0 ? 'text-blue-600' : 'text-red-500']">
                {{ adj.amount >= 0 ? '+' : '' }}¥{{ formatAmount(adj.amount) }}
              </span>
            </div>
            <div class="text-xs text-gray-500 space-y-1 mb-3">
              <div v-if="adj.originalContent"><span class="text-gray-400">原内容：</span>{{ adj.originalContent }}</div>
              <div v-if="adj.changedContent"><span class="text-gray-400">变更后：</span>{{ adj.changedContent }}</div>
              <div v-if="adj.responsibleParty"><span class="text-gray-400">责任方：</span>{{ adj.responsibleParty }}</div>
              <div v-if="adj.notes"><span class="text-gray-400">备注：</span>{{ adj.notes }}</div>
              <div v-if="adj.affectsPayment" class="text-orange-500">⚠️ 影响付款</div>
            </div>
            <div class="flex gap-2">
              <button @click="openAdjustmentForm(adj)" class="text-xs px-3 py-1 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">编辑</button>
              <button @click="confirmDeleteAdjustment(adj)" class="text-xs px-3 py-1 border border-red-200 rounded-lg text-red-500 hover:bg-red-50">删除</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Tab 3：付款记录 ── -->
      <div v-if="activeTab === 'payments'">
        <div class="flex justify-between items-center mb-3">
          <span class="text-sm text-gray-500">共 {{ payments.length }} 条，合计 ¥{{ formatAmount(paymentsTotal) }}</span>
          <button @click="openPaymentForm()" class="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">+ 新增</button>
        </div>
        <!-- 导出按钮组 -->
        <div class="flex flex-wrap gap-2 mb-4">
          <button @click="exportPayments" class="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            📥 导出付款记录
          </button>
          <button @click="exportAdjustments" class="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            📥 导出调整记录
          </button>
          <button @click="exportSummary" class="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            📥 导出付款汇总
          </button>
        </div>

        <div v-if="payments.length === 0" class="text-center py-16 text-gray-400">
          <div class="text-4xl mb-3">💳</div>
          <div class="text-sm">暂无付款记录，点击右上角新增</div>
        </div>

        <div v-else class="space-y-3">
          <div v-for="pay in payments" :key="pay.id" class="bg-white rounded-xl border border-gray-200 p-4">
            <div class="flex items-start justify-between gap-2 mb-2">
              <div>
                <div class="font-medium text-gray-900">{{ pay.paymentStage || '付款' }}</div>
                <div class="text-xs text-gray-400 mt-0.5">{{ pay.paymentDate }}</div>
              </div>
              <span class="text-base font-bold text-green-600 shrink-0">¥{{ formatAmount(pay.amount) }}</span>
            </div>
            <div class="text-xs text-gray-500 space-y-1 mb-3">
              <div v-if="pay.method"><span class="text-gray-400">方式：</span>{{ pay.method }}</div>
              <div v-if="pay.reason"><span class="text-gray-400">备注：</span>{{ pay.reason }}</div>
              <div v-if="pay.verified" class="text-green-500">✅ 已核对</div>
            </div>
            <div class="flex gap-2">
              <button @click="openPaymentForm(pay)" class="text-xs px-3 py-1 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">编辑</button>
              <button @click="confirmDeletePayment(pay)" class="text-xs px-3 py-1 border border-red-200 rounded-lg text-red-500 hover:bg-red-50">删除</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── 调整记录表单弹窗 ── -->
    <div v-if="showAdjustmentForm" class="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-end justify-center" @click.self="showAdjustmentForm = false">
      <div class="bg-white rounded-t-2xl w-full max-w-lg p-5 max-h-[90vh] overflow-y-auto">
        <h3 class="font-semibold text-gray-900 mb-4">{{ editingAdjustment?.id ? '编辑调整记录' : '新增调整记录' }}</h3>
        <div class="space-y-3">
          <div>
            <label class="text-xs text-gray-500 mb-1 block">变更事项 *</label>
            <input v-model="adjForm.title" type="text" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" placeholder="例：浴室柜减少1个" />
          </div>
          <div>
            <label class="text-xs text-gray-500 mb-1 block">原合同内容</label>
            <input v-model="adjForm.originalContent" type="text" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label class="text-xs text-gray-500 mb-1 block">变更后内容</label>
            <input v-model="adjForm.changedContent" type="text" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs text-gray-500 mb-1 block">调整金额（元）*</label>
              <input v-model.number="adjForm.amount" type="number" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" placeholder="扣减填负数" />
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">类型</label>
              <select v-model="adjForm.type" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white">
                <option v-for="t in adjTypes" :key="t" :value="t">{{ t }}</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs text-gray-500 mb-1 block">状态</label>
              <select v-model="adjForm.status" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white">
                <option v-for="s in adjStatuses" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">确认日期</label>
              <input v-model="adjForm.agreementDate" type="date" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" />
            </div>
          </div>
          <div>
            <label class="text-xs text-gray-500 mb-1 block">责任方</label>
            <input v-model="adjForm.responsibleParty" type="text" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" />
          </div>
          <div class="flex items-center gap-2">
            <input v-model="adjForm.affectsPayment" type="checkbox" id="affectsPayment" class="rounded" />
            <label for="affectsPayment" class="text-sm text-gray-700">影响付款</label>
          </div>
          <div>
            <label class="text-xs text-gray-500 mb-1 block">备注</label>
            <textarea v-model="adjForm.notes" rows="2" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 resize-none"></textarea>
          </div>
        </div>
        <div class="flex gap-3 mt-4">
          <button @click="showAdjustmentForm = false" class="flex-1 py-2 border border-gray-200 rounded-lg text-sm text-gray-600">取消</button>
          <button @click="saveAdjustment" :disabled="savingAdj" class="flex-1 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 disabled:opacity-50">
            {{ savingAdj ? '保存中...' : '保存' }}
          </button>
        </div>
      </div>
    </div>

    <!-- ── 付款记录表单弹窗 ── -->
    <div v-if="showPaymentForm" class="fixed inset-0 bg-black bg-opacity-40 z-40 flex items-end justify-center" @click.self="showPaymentForm = false">
      <div class="bg-white rounded-t-2xl w-full max-w-lg p-5 max-h-[90vh] overflow-y-auto">
        <h3 class="font-semibold text-gray-900 mb-4">{{ editingPayment?.id ? '编辑付款记录' : '新增付款记录' }}</h3>
        <div class="space-y-3">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-xs text-gray-500 mb-1 block">付款日期 *</label>
              <input v-model="payForm.paymentDate" type="date" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label class="text-xs text-gray-500 mb-1 block">金额（元）*</label>
              <input v-model.number="payForm.amount" type="number" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" />
            </div>
          </div>
          <div>
            <label class="text-xs text-gray-500 mb-1 block">付款节点</label>
            <select v-model="payForm.paymentStage" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white">
              <option value="">请选择</option>
              <option v-for="s in paymentStages" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div>
            <label class="text-xs text-gray-500 mb-1 block">支付方式</label>
            <select v-model="payForm.method" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 bg-white">
              <option value="">请选择</option>
              <option v-for="m in payMethods" :key="m" :value="m">{{ m }}</option>
            </select>
          </div>
          <div>
            <label class="text-xs text-gray-500 mb-1 block">备注</label>
            <textarea v-model="payForm.reason" rows="2" class="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 resize-none"></textarea>
          </div>
          <div class="flex items-center gap-2">
            <input v-model="payForm.verified" type="checkbox" id="verified" class="rounded" />
            <label for="verified" class="text-sm text-gray-700">已核对</label>
          </div>
        </div>
        <div class="flex gap-3 mt-4">
          <button @click="showPaymentForm = false" class="flex-1 py-2 border border-gray-200 rounded-lg text-sm text-gray-600">取消</button>
          <button @click="savePayment" :disabled="savingPay" class="flex-1 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 disabled:opacity-50">
            {{ savingPay ? '保存中...' : '保存' }}
          </button>
        </div>
      </div>
    </div>

    <!-- ── 删除确认弹窗 ── -->
    <div v-if="deleteConfirm.show" class="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4">
      <div class="bg-white rounded-2xl p-5 w-full max-w-sm">
        <h3 class="font-semibold text-gray-900 mb-2">确认删除</h3>
        <p class="text-sm text-gray-500 mb-4">确定要删除「{{ deleteConfirm.title }}」吗？此操作不可撤销。</p>
        <div class="flex gap-3">
          <button @click="deleteConfirm.show = false" class="flex-1 py-2 border border-gray-200 rounded-lg text-sm text-gray-600">取消</button>
          <button @click="executeDelete" class="flex-1 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">确认删除</button>
        </div>
      </div>
    </div>

    <div class="h-8"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  getContract, subscribeAdjustments, addAdjustment, updateAdjustment, deleteAdjustment, initDefaultAdjustment,
  subscribePayments, addPayment, updatePayment, deletePayment
} from '../firebase/contract'

const tabs = [
  { key: 'overview', label: '合同概览' },
  { key: 'adjustments', label: '调整记录' },
  { key: 'payments', label: '付款记录' }
]
const activeTab = ref('overview')
const toast = ref(null)

// ── 合同概览 ──
const contract = ref(null)
const loadingContract = ref(true)

// ── 调整记录 ──
const adjustments = ref([])
const showAdjustmentForm = ref(false)
const editingAdjustment = ref(null)
const savingAdj = ref(false)
const adjTypes = ['扣减', '增加', '责任变更', '范围调整']
const adjStatuses = ['待确认', '已确认', '有争议']
const statusColors = { '已确认': 'bg-green-100 text-green-700', '待确认': 'bg-yellow-100 text-yellow-700', '有争议': 'bg-red-100 text-red-700' }
const typeColors = { '扣减': 'bg-red-50 text-red-600', '增加': 'bg-blue-50 text-blue-600', '责任变更': 'bg-purple-50 text-purple-600', '范围调整': 'bg-orange-50 text-orange-600' }

const adjFormDefault = () => ({ title: '', originalContent: '', changedContent: '', amount: 0, type: '扣减', status: '待确认', affectsPayment: false, responsibleParty: '', agreementDate: '', notes: '' })
const adjForm = ref(adjFormDefault())

// ── 付款记录 ──
const payments = ref([])
const showPaymentForm = ref(false)
const editingPayment = ref(null)
const savingPay = ref(false)
const paymentStages = ['第一次40%', '第二次30%', '第三次20%', '第四次10%', '补充协议款', '其他']
const payMethods = ['银行转账', '支付宝', '微信', '现金', '其他']

const payFormDefault = () => ({ paymentDate: '', amount: 0, paymentStage: '', method: '', reason: '', verified: false })
const payForm = ref(payFormDefault())

// ── 删除确认 ──
const deleteConfirm = ref({ show: false, title: '', type: '', id: '' })

// ── 计算金额 ──
const totalAdjustment = computed(() => adjustments.value.reduce((sum, a) => sum + (Number(a.amount) || 0), 0))
const adjustedAmount = computed(() => (contract.value?.originalAmount || 0) + totalAdjustment.value)
const paymentsTotal = computed(() => payments.value.reduce((sum, p) => sum + (Number(p.amount) || 0), 0))
const totalPaid = computed(() => payments.value.length > 0 ? paymentsTotal.value : (contract.value?.paidAmount || 0))
const unpaidAmount = computed(() => adjustedAmount.value - totalPaid.value)

function formatAmount(n) {
  return Number(n || 0).toLocaleString('zh-CN')
}

function showToast(message, type = 'success') {
  toast.value = { message, type }
  setTimeout(() => { toast.value = null }, 2500)
}

// ── 调整记录表单 ──
function openAdjustmentForm(item = null) {
  editingAdjustment.value = item
  adjForm.value = item ? { ...item } : adjFormDefault()
  showAdjustmentForm.value = true
}

async function saveAdjustment() {
  if (!adjForm.value.title) return showToast('请填写变更事项', 'error')
  if (adjForm.value.amount === '' || adjForm.value.amount === null) return showToast('请填写调整金额', 'error')
  savingAdj.value = true
  try {
    const data = { ...adjForm.value }
    if (editingAdjustment.value?.id) {
      await updateAdjustment(editingAdjustment.value.id, data)
      showToast('已更新')
    } else {
      await addAdjustment(data)
      showToast('已新增')
    }
    showAdjustmentForm.value = false
  } catch (e) {
    showToast('保存失败：' + e.message, 'error')
  } finally {
    savingAdj.value = false
  }
}

function confirmDeleteAdjustment(item) {
  deleteConfirm.value = { show: true, title: item.title, type: 'adjustment', id: item.id }
}

// ── 付款记录表单 ──
function openPaymentForm(item = null) {
  editingPayment.value = item
  payForm.value = item ? { ...item } : payFormDefault()
  showPaymentForm.value = true
}

async function savePayment() {
  if (!payForm.value.paymentDate) return showToast('请填写付款日期', 'error')
  if (!payForm.value.amount) return showToast('请填写金额', 'error')
  savingPay.value = true
  try {
    const data = { ...payForm.value }
    if (editingPayment.value?.id) {
      await updatePayment(editingPayment.value.id, data)
      showToast('已更新')
    } else {
      await addPayment(data)
      showToast('已新增')
    }
    showPaymentForm.value = false
  } catch (e) {
    showToast('保存失败：' + e.message, 'error')
  } finally {
    savingPay.value = false
  }
}

function confirmDeletePayment(item) {
  deleteConfirm.value = { show: true, title: `¥${formatAmount(item.amount)} (${item.paymentDate})`, type: 'payment', id: item.id }
}

async function executeDelete() {
  try {
    if (deleteConfirm.value.type === 'adjustment') {
      await deleteAdjustment(deleteConfirm.value.id)
    } else {
      await deletePayment(deleteConfirm.value.id)
    }
    showToast('已删除')
  } catch (e) {
    showToast('删除失败', 'error')
  } finally {
    deleteConfirm.value.show = false
  }
}

// ── 监听器 ──
let unsubAdj = null
let unsubPay = null

onMounted(async () => {
  loadingContract.value = true
  contract.value = await getContract()
  loadingContract.value = false
  await initDefaultAdjustment()
  unsubAdj = subscribeAdjustments(data => { adjustments.value = data })
  unsubPay = subscribePayments(data => { payments.value = data })
})

onUnmounted(() => {
  if (unsubAdj) unsubAdj()
  if (unsubPay) unsubPay()
})

// ── CSV 导出工具 ──
function escapeCSV(val) {
  if (val === null || val === undefined) return ''
  const str = String(val)
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return '"' + str.replace(/"/g, '""') + '"'
  }
  return str
}

function rowToCSV(arr) {
  return arr.map(escapeCSV).join(',')
}

function downloadCSV(filename, rows) {
  const BOM = '\uFEFF'
  const content = BOM + rows.map(r => rowToCSV(r)).join('\r\n')
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function todayStr() {
  return new Date().toISOString().split('T')[0]
}

function exportPayments() {
  const header = ['付款日期', '金额', '付款节点', '支付方式', '备注', '是否已核对', '创建时间', '更新时间']
  const rows = [header, ...payments.value.map(p => [
    p.paymentDate || '',
    p.amount || 0,
    p.paymentStage || '',
    p.method || '',
    p.reason || '',
    p.verified ? '是' : '否',
    p.createdAt ? new Date(p.createdAt).toLocaleString('zh-CN') : '',
    p.updatedAt ? new Date(p.updatedAt).toLocaleString('zh-CN') : '',
  ])]
  downloadCSV(`payments-${todayStr()}.csv`, rows)
  showToast('付款记录已导出')
}

function exportAdjustments() {
  const header = ['变更事项', '原合同内容', '变更后内容', '调整金额', '类型', '状态', '是否影响付款', '责任方', '确认日期', '备注', '创建时间', '更新时间']
  const rows = [header, ...adjustments.value.map(a => [
    a.title || '',
    a.originalContent || '',
    a.changedContent || '',
    a.amount || 0,
    a.type || '',
    a.status || '',
    a.affectsPayment ? '是' : '否',
    a.responsibleParty || '',
    a.agreementDate || '',
    a.notes || '',
    a.createdAt ? new Date(a.createdAt).toLocaleString('zh-CN') : '',
    a.updatedAt ? new Date(a.updatedAt).toLocaleString('zh-CN') : '',
  ])]
  downloadCSV(`contract-adjustments-${todayStr()}.csv`, rows)
  showToast('调整记录已导出')
}

function exportSummary() {
  const header = ['项目', '金额']
  const rows = [
    header,
    ['原合同金额', contract.value?.originalAmount || 0],
    ['合同调整金额合计', totalAdjustment.value],
    ['调整后合同金额', adjustedAmount.value],
    ['已支付金额', totalPaid.value],
    ['尚未支付金额', unpaidAmount.value],
    ['付款记录数量', payments.value.length],
    ['合同调整记录数量', adjustments.value.length],
    ['导出时间', new Date().toLocaleString('zh-CN')],
  ]
  downloadCSV(`contract-summary-${todayStr()}.csv`, rows)
  showToast('付款汇总已导出')
}
</script>