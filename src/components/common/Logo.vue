<script setup lang="ts">
import { cn } from "@/lib/utils";
import { useSlots, type HTMLAttributes } from "vue";
import { useRouter } from "vue-router";

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

const router = useRouter();

const slots = useSlots();
</script>

<template>
  <div
    :class="
      cn(
        'text-olive flex cursor-pointer items-center gap-1 text-2xl font-semibold',
        props.class,
      )
    "
    @click="router.push('/')"
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
