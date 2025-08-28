<template>
  <Carousel
    v-slot="{ canScrollNext }"
    :opts="{ align: 'start', loop: true, duration: 3000 }"
    :plugins="[...plugins]"
  >
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
      >
        <PlayIcon
          :class="` ${isPlaying ? 'hidden' : 'motion-preset-focus motion-preset-fade'} text-olive`"
          @click="handlePlay"
        />
        <PauseIcon
          :class="` ${isPlaying ? 'motion-preset-focus motion-preset-fade' : 'hidden'} text-olive`"
          @click="handlePlay"
        />
      </div>
      <CarouselPrevious
        class="size-12 cursor-pointer"
        class-icon="size-6 text-olive"
        :disabled="!canScrollNext"
      />
    </div>
  </Carousel>
</template>

<script setup lang="ts">
import ProductCardBackground from "../common/ProductCardBackground.vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
import { computed, ref } from "vue";
import { PauseIcon, PlayIcon } from "lucide-vue-next";
import { data } from "@/utils/data";

const isPlaying = ref<boolean>(true);

const autoplay = Autoplay({ delay: 8000, stopOnInteraction: false });

const plugins = computed(() => (isPlaying.value ? [autoplay] : []));

const handlePlay = () => {
  isPlaying.value = !isPlaying.value;

  if (isPlaying.value) {
    autoplay.stop();
  } else {
    autoplay.play();
  }
};
</script>
