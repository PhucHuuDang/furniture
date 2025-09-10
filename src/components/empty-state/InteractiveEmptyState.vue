<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Motion } from "motion-v";
import { ref, type Component } from "vue";

const ICON_VARIANTS = {
  left: {
    initial: { scale: 0.8, opacity: 0, x: 0, y: 0, rotate: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: -6,
      transition: { duration: 0.4, delay: 0.1 },
    },
    hover: {
      x: -22,
      y: -5,
      rotate: -15,
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  },
  center: {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.2 },
    },
    hover: { y: -10, scale: 1.15, transition: { duration: 0.2 } },
  },
  right: {
    initial: { scale: 0.8, opacity: 0, x: 0, y: 0, rotate: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 6,
      transition: { duration: 0.4, delay: 0.3 },
    },
    hover: {
      x: 22,
      y: -5,
      rotate: 15,
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  },
};

const CONTENT_VARIANTS = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.2 } },
};

const BUTTON_VARIANTS = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.3 } },
};

// Props
defineProps<{
  title: string;
  description?: string;
  icons?: Component[];
  action?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    icon?: Component;
  };
  variant?: "default" | "subtle" | "error";
  size?: "sm" | "default" | "lg";
  theme?: "light" | "dark" | "neutral";
  isIconAnimated?: boolean;
  className?: string;
}>();

// Emits
defineEmits(["click"]);
</script>

<template>
  <Motion
    tag="section"
    role="region"
    initial="initial"
    animate="animate"
    :while-hover="isIconAnimated ? 'hover' : 'animate'"
    :class="
      cn(
        'group relative flex flex-col items-center justify-center overflow-hidden rounded-xl text-center transition-all duration-300',
        size === 'sm' ? 'p-6' : size === 'lg' ? 'p-12' : 'p-8',
        className,
      )
    "
  >
    <!-- Background -->
    <div
      aria-hidden="true"
      class="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.02]"
      style="
        background-image: radial-gradient(
          circle at 2px 2px,
          #fff 1px,
          transparent 1px
        );
        background-size: 24px 24px;
      "
    />

    <div class="relative z-10 flex flex-col items-center">
      <!-- Icons -->
      <div
        v-if="icons && icons.length >= 3"
        class="relative isolate mb-6 flex justify-center"
      >
        <Motion
          v-for="(variant, idx) in ['left', 'center', 'right']"
          :key="variant"
          tag="div"
          :variants="ICON_VARIANTS[variant as keyof typeof ICON_VARIANTS]"
          class="relative flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition-all duration-300"
          :while-hover="{ rotate: 90, scale: 1.1 }"
          :while-tap="{ scale: 0.98 }"
        >
          <div class="text-sm transition-colors duration-300">
            <component :is="icons[idx]" />
          </div>
        </Motion>
      </div>

      <!-- Title + description -->
      <Motion tag="div" :variants="CONTENT_VARIANTS" class="mb-6 space-y-2">
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <p
          v-if="description"
          class="max-w-md text-sm leading-relaxed opacity-80"
        >
          {{ description }}
        </p>
      </Motion>

      <!-- Action -->
      <Motion v-if="action" tag="div" :variants="BUTTON_VARIANTS">
        <Motion
          tag="button"
          type="button"
          :disabled="action.disabled"
          @click="action.onClick"
          whileTap="{ scale: 0.98 }"
          class="relative inline-flex items-center gap-2 overflow-hidden rounded-md border p-1 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow-md"
        >
          <Motion
            v-if="action.icon"
            tag="div"
            class="text-sm"
            whileHover="{ rotate: 90 }"
          >
            <component :is="action.icon" class="size-5" />
          </Motion>
          <span class="relative z-10 text-sm">{{ action.label }}</span>
        </Motion>
      </Motion>
    </div>
  </Motion>
</template>
