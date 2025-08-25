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

      <AnimatePresence mode="popLayout">
        <motion.img
          :key="activeIndex"
          :src="images[activeIndex].src"
          alt="home-bg"
          class="absolute right-1/2 left-1/2 z-10 col-span-2 mx-auto hidden h-[1000px] w-[900px] -translate-x-1/3 -translate-y-1/3 object-cover transition-all duration-300 lg:block"
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
            duration: 0.5,
            stiffness: 100,
            damping: 10,
          }"
        />
      </AnimatePresence>
    </div>
    <div
      class="bg-sage flex flex-col items-center justify-between rounded-2xl p-6 lg:items-start 2xl:flex-row"
    >
      <div class="flex w-full flex-col lg:min-w-[500px]">
        <h2
          class="text-dark-text mb-4 w-auto text-xl font-semibold text-wrap whitespace-normal md:text-2xl xl:text-4xl 2xl:text-5xl"
        >
          Elevate Your Space with Timeless,<br class="hidden lg:block" />
          Elegant, and Modern <br class="hidden lg:block" />
          Furniture Designs
        </h2>
        <span class="text-dark-text mb-6 max-w-sm text-base xl:text-2xl">
          Explore our latest collections and find the perfect piece to
          complement <br />
          your space.
        </span>
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
              :class="
                i === activeIndex
                  ? `${images[i].color} scale-110`
                  : 'bg-stone-400'
              "
            />
          </div>
        </div>
      </div>

      <!-- <div class="flex flex-col items-center gap-4 pr-0 2xl:pr-5">
        <AnimatePresence mode="popLayout">
          <motion.img
            v-for="(image, index) in images[activeIndex].childSrc"
            :src="image"
            :key="image + index"
            alt="home-bg"
            class="h-[400px] w-[400px] object-cover transition-all duration-300 lg:h-[350px] lg:w-[350px] xl:h-[350px] xl:w-[350px]"
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
      </div> -->

      <div class="flex flex-col items-center gap-4 pr-0 2xl:pr-5">
        <AnimatePresence mode="popLayout">
          <ImagePreview
            v-for="(image, index) in images[activeIndex].childSrc"
            :key="image + index"
            :images="images[activeIndex].childSrc"
            :alt="[`Image ${index + 1}`]"
          >
            <!-- slot = trigger content -->
            <motion.img
              :src="image"
              :alt="`Preview ${index + 1}`"
              class="h-[400px] w-[400px] object-cover transition-all duration-300 lg:h-[350px] lg:w-[350px] xl:h-[350px] xl:w-[350px]"
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :exit="{ opacity: 0 }"
              :transition="{ duration: 1 }"
              layout
            />
          </ImagePreview>
        </AnimatePresence>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VideoText } from "@/components/ui/video-text";
import { ref } from "vue";
import { AnimatePresence, motion } from "motion-v";
import ImagePreview from "@/components/custom/ImagePreview.vue";

const images = [
  {
    src: "/chair.png",
    childSrc: ["/chair.png", "/chair.png"],
    color: "bg-[#6d7941]",
  },
  {
    src: "/coma-chair.png",
    childSrc: ["/coma-chair.png", "/coma-chair.png"],
    color: "bg-stone-600",
  },
];

const changeImage = () => {
  if (activeIndex.value >= images.length - 1) {
    activeIndex.value = 0;
  } else {
    activeIndex.value++;
  }
};

setInterval(changeImage, 4000);

const activeIndex = ref(0);

const setActive = (i: number) => {
  activeIndex.value = i;
};
</script>
