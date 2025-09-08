<script setup lang="ts">
import { usd } from "@/utils/currency";
import type { ItemProps } from "@/utils/data";

const props = defineProps<{
  product: ItemProps;

  onRoute: () => void;
}>();
</script>

<template>
  <div
    class="group w-full cursor-pointer gap-2 rounded-md p-2 transition duration-300 ease-in-out hover:bg-slate-100"
    @click="props.onRoute"
  >
    <div class="flex w-full items-center gap-2">
      <img
        :src="product.image"
        :alt="product.title"
        class="flex h-14 w-18 items-center justify-center rounded-md border border-stone-600/10 object-cover p-1 group-hover:border-stone-600/20"
      />

      <div class="flex flex-col gap-2">
        <h3
          class="text-md group-hover:text-primary line-clamp-1 font-medium capitalize italic"
        >
          {{ product.title }}
        </h3>
        <p class="line-clamp-1 text-sm text-gray-500 group-hover:text-gray-500">
          {{ product.description }}
        </p>
      </div>

      <div class="flex flex-col gap-1">
        <del
          class="text-sm text-gray-500 group-hover:text-gray-500"
          v-if="product.discount"
        >
          {{ usd(product.price) }}
        </del>
        <p
          class="text-md group-hover:text-primary font-medium"
          v-if="product.discount"
        >
          {{ usd(product.discount ?? 0) }}
        </p>
        <p class="text-md group-hover:text-primary font-medium" v-else>
          {{ usd(product.price) }}
        </p>
      </div>
    </div>
  </div>
</template>
