<script setup lang="ts">
interface TableRows {
  values: string[];
}

const props = defineProps<{
  data: TableRows[];
}>();
</script>

<template>
  <div
    class="w-full overflow-hidden rounded-2xl border border-gray-200 shadow-md"
  >
    <table class="w-full border-collapse">
      <tbody>
        <tr
          v-for="(row, rowIndex) in props.data"
          :key="rowIndex"
          :class="rowIndex % 2 === 0 ? 'bg-gray-50' : ''"
        >
          <td
            v-for="(cell, colIndex) in row.values"
            :key="colIndex"
            class="px-4 py-3 text-gray-600"
            :class="colIndex === 0 ? 'w-1/3 font-medium text-gray-700' : ''"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
