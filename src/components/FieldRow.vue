<template>
  <div class="flex items-start px-4 py-3 gap-3">
    <!-- 标签 -->
    <div class="text-sm text-gray-500 shrink-0 w-24 pt-0.5">{{ label }}</div>

    <!-- 查看模式 -->
    <div v-if="!editing" class="flex-1 min-w-0">
      <!-- 有颜色映射的字段（优先级/状态）-->
      <span
        v-if="colorMap && value"
        :class="['text-xs px-2 py-0.5 rounded-full font-medium', colorMap[value] || 'bg-gray-100 text-gray-600']"
      >
        {{ value }}
      </span>
      <!-- 普通文本 -->
      <span v-else class="text-sm text-gray-900 break-words">
        {{ value ?? '—' }}
      </span>
    </div>

    <!-- 编辑模式 -->
    <div v-else class="flex-1 min-w-0">

      <!-- 下拉选择 -->
      <select
        v-if="type === 'select'"
        :value="value"
        @change="$emit('update', $event.target.value)"
        class="w-full text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400 bg-white"
      >
        <option value="">—</option>
        <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
      </select>

      <!-- 可输入的下拉（属性/类型） -->
      <div v-else-if="type === 'combobox'" class="relative">
        <input
          :value="value"
          @input="$emit('update', $event.target.value)"
          list="combobox-options"
          class="w-full text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400"
          placeholder="可输入或从下拉选择"
        />
        <datalist id="combobox-options">
          <option v-for="opt in options" :key="opt" :value="opt" />
        </datalist>
      </div>

      <!-- 多行文本 -->
      <textarea
        v-else-if="type === 'textarea'"
        :value="value"
        @input="$emit('update', $event.target.value)"
        rows="3"
        class="w-full text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400 resize-none"
      />

      <!-- 数字 -->
      <input
        v-else-if="type === 'number'"
        type="number"
        :value="value"
        @input="$emit('update', $event.target.value === '' ? null : Number($event.target.value))"
        class="w-full text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400"
      />

      <!-- 日期 -->
      <input
        v-else-if="type === 'date'"
        type="date"
        :value="value"
        @input="$emit('update', $event.target.value || null)"
        class="w-full text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400"
      />

      <!-- 普通文本（默认） -->
      <input
        v-else
        type="text"
        :value="value"
        @input="$emit('update', $event.target.value || null)"
        class="w-full text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:outline-none focus:border-blue-400"
      />

    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  field: String,
  value: [String, Number, null],
  editing: Boolean,
  type: {
    type: String,
    default: 'text'
  },
  options: Array,
  colorMap: Object
})

defineEmits(['update'])
</script>