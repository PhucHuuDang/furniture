<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { ImagesSlider } from "../ui/images-slider";
import { RippleButton } from "../ui/ripple-button";

const images = [
  "https://picsum.photos/seed/waiting/1920/1080",
  "https://picsum.photos/seed/full-collapse/1920/1080",
  "https://picsum.photos/seed/five-stories-falling/1920/1080",
  "https://picsum.photos/seed/war-all-the-time/1920/1080",
  "https://picsum.photos/seed/a-city-by-the-light-divided/1920/1080",
  "https://picsum.photos/seed/common-existence/1920/1080",
  "https://picsum.photos/seed/no-devolucion/1920/1080",
];
</script>

<template>
  <div class="mb-5">
    <ImagesSlider
      :images="images"
      autoplay
      class="h-[700px] rounded-4xl focus:ring-0"
    >
      <div
        class="flex size-full items-end justify-center bg-gradient-to-b from-transparent via-transparent to-black/80 p-8"
      >
        <div class="flex max-w-prose flex-col items-center text-center">
          <h1 class="text-olive mb-8 text-5xl max-md:text-2xl">
            CHOOSE THE MOST APPROPRIATE CHAIR FOR YOU FURNISHINGS FOR YOUR HOUSE
          </h1>
          <RippleButton
            class="group flex w-40 items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            class-slot="flex items-center justify-center"
          >
            <span>Explore Now</span>

            <ArrowRight
              class="size-6 transition duration-300 group-hover:translate-x-1"
            />
          </RippleButton>
        </div>
      </div>
    </ImagesSlider>
  </div>
</template>
