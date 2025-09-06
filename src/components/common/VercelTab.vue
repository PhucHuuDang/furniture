<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  ref,
  reactive,
  onMounted,
  watch,
  nextTick,
  type Component,
  type HTMLAttributes,
  type Ref,
} from "vue";
import type { JSX } from "vue/jsx-runtime";

export interface Tab {
  id: string;
  label: string;
  icon?: Component;
  tabComponent: Component | JSX.Element;
}

const props = defineProps<{
  tabs: Tab[];
  activeTab?: string;
  classIcon?: string;

  onChangeTab?: (tab: Tab) => void;
}>();

const emit = defineEmits<{
  (e: "update:activeTab", value: string): void;
  (e: "tabChange", value: string): void;
}>();

const hoveredIndex = ref<number | null>(null);
const activeIndex = ref(0);
const hoverStyle = reactive<{ left: string; width: string }>({
  left: "0px",
  width: "0px",
});
const activeStyle = reactive<{ left: string; width: string }>({
  left: "0px",
  width: "0px",
});

const tabRefs = ref<(HTMLDivElement | null)[]>([]);

function updateHover(index: number | null) {
  hoveredIndex.value = index;
  if (index !== null && tabRefs.value[index]) {
    const el = tabRefs.value[index]!;
    hoverStyle.left = `${el.offsetLeft}px`;
    hoverStyle.width = `${el.offsetWidth}px`;
  }
}

function updateActive(index: number) {
  activeIndex.value = index;
  const el = tabRefs.value[index];
  if (el) {
    activeStyle.left = `${el.offsetLeft}px`;
    activeStyle.width = `${el.offsetWidth}px`;
  }
}

watch(
  () => props.activeTab,
  (val) => {
    if (val) {
      const idx = props.tabs.findIndex((t) => t.id === val);
      if (idx !== -1) {
        nextTick(() => updateActive(idx));
      }
    }
  },
  { immediate: true },
);

onMounted(() => {
  nextTick(() => {
    if (tabRefs.value[0]) {
      const el = tabRefs.value[0]!;
      activeStyle.left = `${el.offsetLeft}px`;
      activeStyle.width = `${el.offsetWidth}px`;
    }
  });
});
</script>

<template>
  <div class="relative">
    <div class="relative">
      <!-- Hover Highlight -->
      <div
        class="absolute flex h-[30px] items-center rounded-[6px] bg-[#0e0f1114] transition-all duration-300 ease-out dark:bg-[#ffffff1a]"
        :style="{ ...hoverStyle, opacity: hoveredIndex !== null ? 1 : 0 }"
      />

      <!-- Active Indicator -->
      <div
        class="absolute bottom-[-6px] h-[2px] bg-[#0e0f11] transition-all duration-300 ease-out dark:bg-white"
        :style="activeStyle"
      />

      <!-- Tabs -->
      <div class="relative flex items-center space-x-[6px]">
        <div
          v-for="(tab, index) in props.tabs"
          :key="tab.id"
          ref="tabRefs"
          class="h-[30px] cursor-pointer px-3 py-2 transition-colors duration-300"
          :class="
            index === activeIndex
              ? 'text-[#0e0e10] dark:text-white'
              : 'text-[#0e0f1199] dark:text-[#ffffff99]'
          "
          @mouseenter="updateHover(index)"
          @mouseleave="updateHover(null)"
          @click="
            () => {
              updateActive(index);
              emit('update:activeTab', tab.id);
              emit('tabChange', tab.id);
              props.onChangeTab?.(tab);
            }
          "
        >
          <div
            :class="`flex h-full items-center justify-center text-sm leading-5 font-medium whitespace-nowrap ${tab.icon ? 'gap-1' : ''}`"
          >
            <component :is="tab.icon" :class="cn('size-4', props.classIcon)" />

            {{ tab.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
