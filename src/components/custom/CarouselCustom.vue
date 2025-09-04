<script setup lang="ts">
import ProductCardBackground from "../common/ProductCardBackground.vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { PauseIcon, PlayIcon } from "lucide-vue-next";
import { data } from "@/utils/data";
import CarouselPrevious from "../ui/carousel/CarouselPrevious.vue";
import CarouselNext from "../ui/carousel/CarouselNext.vue";

import AutoScroll from "embla-carousel-auto-scroll";

const isPlaying = ref<boolean>();

const scroll = AutoScroll({ speed: 1 });

const handleScrolling = async () => {
  if (scroll.isPlaying()) {
    isPlaying.value = scroll.isPlaying();
    return scroll.stop();
  } else {
    isPlaying.value = scroll.isPlaying();
    return scroll.play();
  }
};
</script>

<template>
  <Carousel :opts="{ align: 'start', loop: true }" :plugins="[scroll]">
    <CarouselContent class="mt-20">
      <CarouselItem
        v-for="(item, index) in data"
        :key="index"
        class="p-2 md:basis-1/2 xl:basis-1/4"
      >
        <div class="pl-1">
          <ProductCardBackground
            :title="item.title"
            :description="item.description"
            :image="item.image"
            :price="item.price"
            :discount="item.discount"
            :url="item.url"
            :buy="item.buy"
            :stars="item.stars"
            :category="item.category"
          />
        </div>
      </CarouselItem>
    </CarouselContent>

    <div
      class="absolute top-5 right-20 z-10 flex items-center justify-center rounded-3xl"
    >
      <CarouselNext
        class="size-12 cursor-pointer"
        class-icon="size-6 text-olive"
      />

      <div
        class="mx-3 flex cursor-pointer items-center rounded-full border-1 border-black/10 p-3 shadow-sm transition-colors duration-200 hover:bg-black/5"
        @click="handleScrolling"
      >
        <PauseIcon
          v-if="!isPlaying"
          class="motion-preset-focus motion-preset-fade text-olive"
        />
        <PlayIcon
          v-else-if="isPlaying"
          class="motion-preset-focus motion-preset-fade text-olive"
        />
      </div>
      <CarouselPrevious
        class="size-12 cursor-pointer"
        class-icon="size-6 text-olive"
      />
    </div>
  </Carousel>
</template>
