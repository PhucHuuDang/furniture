<template>
  <div :class="cn('group h-72 w-56 [perspective:1000px]', props.class)">
    <div
      :class="
        cn(
          'relative h-full rounded-4xl transition-all duration-500 [transform-style:preserve-3d]',
          rotation[0],
          props.classContainer,
        )
      "
    >
      <!-- Front -->
      <div
        :class="
          cn(
            'absolute size-full overflow-hidden rounded-4xl border [backface-visibility:hidden]',
            props.classFront,
          )
        "
      >
        <slot />
      </div>

      <!-- Back -->
      <div
        :class="
          cn(
            'absolute h-full w-full overflow-hidden rounded-4xl border bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]',
            rotation[1],
            props.classBack,
          )
        "
      >
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { computed } from "vue";

interface FlipCardProps {
  rotate?: "x" | "y";
  class?: string;
  classFront?: string;
  classBack?: string;
  classContainer?: string;
}

const props = withDefaults(defineProps<FlipCardProps>(), {
  rotate: "y",
});
const rotationClass = {
  x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
  y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
};

const rotation = computed(() => rotationClass[props.rotate]);
</script>
