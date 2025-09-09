<script setup lang="ts">
import { ArrowUpRightIcon, ShoppingCartIcon } from "lucide-vue-next";
import { LinkPreview } from "../ui/link-preview";
import StatefulButton from "../buttons/StatefulButton.vue";
import { usd } from "@/utils/currency";
import type { ItemProps } from "@/utils/data";

interface Props extends ItemProps {
  route?: () => void;
}

defineProps<Props>();

const handleBuy = () => {
  console.log("buy");
};
</script>

<template>
  <div
    class="group bg-sage relative flex min-h-[400px] cursor-pointer flex-col items-center justify-center rounded-[30px] p-2 transition duration-300 sm:p-4 md:h-[500px] md:p-6 lg:h-[600px]"
  >
    <!-- Giá -->
    <span
      class="absolute top-2 right-4 z-10 text-base font-bold text-sky-700 sm:text-lg md:text-2xl"
    >
      {{ usd(1000) }}
    </span>

    <div class="absolute top-8 left-4 z-10 flex flex-col gap-1">
      <span class="text-xs text-amber-500 sm:text-sm">⭐ {{ stars }}</span>
      <h2 class="line-clamp-1 text-lg font-bold italic sm:text-xl md:text-2xl">
        {{ title }}
      </h2>
      <p class="line-clamp-2 text-xs text-gray-500 sm:text-sm">
        {{ description }}
      </p>
    </div>

    <img
      src="/chair.png"
      alt="product-card-bg"
      class="absolute max-w-[70%] object-contain transition-all duration-300 group-hover:scale-105 sm:max-w-[60%] md:max-w-[80%]"
    />

    <div
      class="absolute inset-x-0 bottom-3 flex justify-center px-4 md:justify-end"
    >
      <div
        class="flex items-center gap-2 rounded-4xl border-2 border-stone-400/70 p-2 backdrop-blur-md"
      >
        <div @click.stop.prevent="handleBuy">
          <StatefulButton :delay="1500" class="group/buy">
            <ShoppingCartIcon
              class="size-5 text-white transition-all duration-300 group-hover/buy:scale-110 sm:size-6"
            />
          </StatefulButton>
        </div>

        <LinkPreview
          :url="`/products/${title.toLowerCase()}`"
          :title="title"
          :description="description"
          class="group/arrow z-50 rounded-full border-1 bg-white p-2 font-bold transition-all duration-300 hover:scale-105 hover:border-sky-500/50"
          :width="100"
          :height="100"
        >
          <template #default="{ navigate }" @click.stop.prevent="navigate">
            <ArrowUpRightIcon
              class="size-5 transition-all duration-300 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 group-hover/arrow:text-sky-500 sm:size-6"
            />
          </template>
        </LinkPreview>
      </div>
    </div>
  </div>
</template>
