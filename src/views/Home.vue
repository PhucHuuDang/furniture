<template>
  <div class="">
    <div class="relative">
      <div class="relative h-[300px] w-full overflow-hidden">
        <VideoText
          src="https://videos.pexels.com/video-files/16470784/16470784-uhd_2560_1440_24fps.mp4"
        >
          interiors
        </VideoText>
      </div>
      <img
        src="/src/assets/chair.png"
        alt="home-bg"
        class="absolute right-1/2 left-1/2 col-span-2 mx-auto max-h-[950px] -translate-x-1/3 -translate-y-1/3 object-cover"
      />
    </div>
    <div class="bg-sage flex justify-between rounded-2xl p-6">
      <div class="col-span-2 flex min-w-[500px] flex-col">
        <h2 class="text-dark-text mb-4 text-5xl font-semibold md:text-3xl">
          Elevate Your Space with Timeless,<br />
          Elegant, and Modern <br />
          Furniture Designs
        </h2>
        <p class="text-da text-dark-text mb-6 max-w-sm">
          Explore our latest collections and find the perfect piece to
          complement <br />
          your space.
        </p>
        <button
          class="bg-dark hover:bg-olive inline-flex max-w-36 items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition"
        >
          <span>Shop Now</span>
        </button>

        <div class="pear mt-4 flex flex-col gap-2">
          <div class="max-w-5 rounded-full bg-red-500 p-4" />
          <div class="max-w-5 rounded-full bg-red-500 p-4" />
          <div class="max-w-5 rounded-full bg-red-500 p-4" />
        </div>
      </div>

      <!-- <div class=""> -->

      <!-- </div> -->

      <div class="col-span-[1] flex flex-col gap-4">
        <img
          src="/src/assets/chair.png"
          alt="home-bg"
          class="h-56 w-56 object-cover"
        />
        <img
          src="/src/assets/chair.png"
          alt="home-bg"
          class="h-56 w-56 object-cover"
        />
      </div>

      <!-- <div class="flex flex-col gap-4">
          <img
            src="/src/assets/chair.png"
            alt="home-bg"
            class="h-12 w-12 object-cover"
          />
          <img
            src="/src/assets/chair.png"
            alt="home-bg"
            class="h-12 w-12 object-cover"
          />
          <img
            src="/src/assets/chair.png"
            alt="home-bg"
            class="h-12 w-12 object-cover"
          />
          <img
            src="/src/assets/chair.png"
            alt="home-bg"
            class="h-12 w-12 object-cover"
          />
          <img
            src="/src/assets/chair.png"
            alt="home-bg"
            class="h-12 w-12 object-cover"
          />
        </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { VideoText } from "@/components/ui/video-text";
</script>
