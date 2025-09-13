<script setup lang="ts">
import { Compare } from "@/components/ui/compare";
</script>

<template>
  <div
    class="relative flex h-full w-full items-center overflow-hidden rounded-4xl p-[3px]"
  >
    <Compare
      first-image="/without-furnitures.webp"
      second-image="/with-furnitures.jpg"
      first-content-class="object-cover  rounded-4xl overflow-hidden"
      second-content-class="object-cover rounded-4xl overflow-hidden"
      class="z-10 h-[500px] w-full rounded-4xl"
      slide-mode="drag"
      first-image-alt="without furnitures"
      second-image-alt="with furnitures"
      :initialSliderPercentage="40"
    >
    </Compare>

    <div
      class="animate-rotate-border absolute inset-0 h-full w-full rounded-4xl bg-linear-to-r/longer from-indigo-500 to-teal-400"
    ></div>
  </div>
</template>
