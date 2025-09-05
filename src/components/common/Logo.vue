<script setup lang="ts">
import { cn } from "@/lib/utils";
import { useSlots, type HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];

  classImg?: HTMLAttributes["class"];

  classText?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  class: "",
  classImg: "",
  classText: "",
});

const slots = useSlots();
</script>

<template>
  <div
    :class="
      cn(
        'text-olive flex items-center gap-1 text-2xl font-semibold',
        props.class,
      )
    "
  >
    <img src="/logo.png" alt="logo" :class="cn('h-14 w-14', props.classImg)" />
    <span
      v-if="!slots.default"
      :class="cn('text-2xl font-semibold', props.classText)"
      >Huez</span
    >
    <slot />
  </div>
</template>
