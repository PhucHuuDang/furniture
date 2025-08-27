<template>
  <div
    class="group bg-sage relative flex h-[600px] cursor-pointer flex-col items-center justify-center rounded-[40px] p-4 transition duration-300"
  >
    <span
      class="absolute top-4 right-10 z-10 text-xl font-bold text-sky-700 md:text-2xl"
    >
      {{ usd(1000) }}
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
    <div class="absolute right-12 bottom-4">
      <div
        class="flex items-center justify-between gap-2 rounded-4xl border-2 border-stone-400/70 p-2"
      >
        <div>
          <StatefulButton @click="handleBuy" :delay="1500" class="group/buy">
            <ShoppingCartIcon
              class="size-6 text-white transition-all duration-300 group-hover/buy:scale-110"
            />
          </StatefulButton>
        </div>

        <LinkPreview
          url="https://tailwindcss.com"
          :title="title"
          :description="description"
          class="group/arrow z-50 rounded-full border-1 bg-white p-2 font-bold transition-all duration-300 hover:scale-105 hover:border-sky-500/50"
          :width="100"
          :height="100"
        >
          <template
            #default="{ href, route, navigate, isActive, isExactActive }"
          >
            <a :href="href" @click="navigate" target="_blank">
              <ArrowUpRightIcon
                class="size-6 transition-all duration-300 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 group-hover/arrow:text-sky-500"
              />
            </a>
          </template>
        </LinkPreview>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon, ShoppingCartIcon } from "lucide-vue-next";
import { LinkPreview } from "../ui/link-preview";
import StatefulButton from "../buttons/StatefulButton.vue";
import { usd } from "@/utils/currency";

interface Props {
  title: string;
  description: string;

  image: string;
}

defineProps<Props>();

const handleBuy = () => {
  console.log("buy");
};
</script>
