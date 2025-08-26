<template>
  <div
    class="group relative flex h-[600px] cursor-pointer flex-col items-center justify-center rounded-[40px] bg-slate-300 p-4 transition duration-300"
  >
    <span
      class="absolute top-4 right-10 z-10 text-xl font-bold text-sky-700 md:text-2xl"
    >
      123
    </span>
    <div class="absolute top-10 left-5 z-10 flex flex-col gap-1">
      <span class="text-sm text-amber-500">stars ***</span>
      <h2 class="text-2xl font-bold whitespace-normal italic">
        {{ title }}
      </h2>
      <p class="line-clamp-2 text-sm text-gray-500">
        {{ description }}
      </p>
    </div>

    <img
      src="/chair.png"
      alt="product-card-bg"
      class="absolute aspect-square object-cover p-4 transition-all duration-300 group-hover:p-0"
    />

    <!-- <div class="absolute right-0 bottom-0 w-12 rounded-full bg-red-500">
      123
    </div> -->
    <div class="absolute right-12 bottom-4 text-xl font-bold text-sky-700">
      10000
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;

  image: string;
}

defineProps<Props>();
</script>
