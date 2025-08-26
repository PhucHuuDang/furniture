<template>
  <Carousel
    class="w-full"
    :opts="{ align: 'start', loop: true, duration: 3000 }"
    :plugins="[Autoplay({ delay: 8000, stopOnInteraction: true })]"
  >
    <CarouselContent>
      <CarouselItem
        v-for="(_, index) in 10"
        :key="index"
        class="p-2 md:basis-1/2 xl:basis-1/4"
      >
        <div class="pl-1">
          <ProductCardBackground
            title="Product Name"
            description="Product Description"
            image="Product Image"
          />
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>

<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import ProductCardBackground from "../common/ProductCardBackground.vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
</script>
