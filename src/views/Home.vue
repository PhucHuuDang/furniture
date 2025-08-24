<template>
  <div>
    <div class="">
      <div class="relative h-[420px] w-full overflow-hidden">
        <VideoText
          src="https://videos.pexels.com/video-files/16470784/16470784-uhd_2560_1440_24fps.mp4"
        >
          interiors
        </VideoText>
      </div>

      <AnimatePresence mode="popLayout" class="">
        <motion.img
          :key="activeIndex"
          :src="images[activeIndex].src"
          alt="home-bg"
          class="absolute right-1/2 left-1/2 col-span-2 mx-auto -translate-x-1/3 -translate-y-1/3 object-cover"
          :initial="{
            opacity: 0,
          }"
          :animate="{
            opacity: 1,
          }"
          :exit="{
            opacity: 0,
          }"
          :transition="{
            stiffness: 100,
            damping: 10,
            duration: 0.3,
          }"
          :whileInView="{ opacity: 1 }"
        />
      </AnimatePresence>
    </div>
    <div class="bg-sage flex justify-between rounded-2xl p-6">
      <div class="flex min-w-[500px] flex-col">
        <h2 class="text-dark-text mb-4 text-5xl font-semibold md:text-6xl">
          Elevate Your Space with Timeless,<br />
          Elegant, and Modern <br />
          Furniture Designs
        </h2>
        <p class="text-dark-text mb-6 max-w-sm text-2xl">
          Explore our latest collections and find the perfect piece to
          complement <br />
          your space.
        </p>
        <button
          class="bg-dark hover:bg-olive inline-flex max-w-36 items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition"
        >
          <span>Shop Now</span>
        </button>

        <div class="pear mt-4 flex items-center gap-2">
          <div class="pear mt-4 flex items-center gap-2">
            <div
              v-for="(_, i) in images"
              :key="i"
              @click="setActive(i)"
              class="max-w-5 cursor-pointer rounded-full p-4 transition"
              :class="i === activeIndex ? 'scale-110 bg-red-600' : 'bg-red-400'"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-4 pr-10">
        <AnimatePresence mode="popLayout">
          <motion.img
            v-for="(image, index) in images[activeIndex].childSrc"
            :src="image"
            :key="image + index"
            alt="home-bg"
            class="h-[350px] w-[350px] object-cover"
            :initial="{
              opacity: 0,
            }"
            :animate="{
              opacity: 1,
            }"
            :exit="{
              opacity: 0,
            }"
            :transition="{
              duration: 1,
            }"
            layout
          />
        </AnimatePresence>

        <!-- <img
          src="/src/assets/chair.png"
          alt="home-bg"
          class="h-[350px] w-[350px] object-cover"
        />
        <img
          src="/src/assets/chair.png"
          alt="home-bg"
          class="h-[350px] w-[350px] object-cover"
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VideoText } from "@/components/ui/video-text";
import { ref } from "vue";
import { AnimatePresence, motion } from "motion-v";

const images = [
  {
    src: "/src/assets/chair.png",
    childSrc: ["/src/assets/chair.png", "/src/assets/chair.png"],
  },
  {
    src: "/src/assets/coma-chair.png",
    childSrc: ["/src/assets/coma-chair.png", "/src/assets/coma-chair.png"],
  },
];

const changeImage = () => {
  if (activeIndex.value >= images.length - 1) {
    activeIndex.value = 0;
  } else {
    activeIndex.value++;
  }
};

const activeIndex = ref(0);

const setActive = (i: number) => {
  activeIndex.value = i;
};
</script>
