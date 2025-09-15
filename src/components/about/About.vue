<script setup lang="ts">
import { MorphingText } from "../ui/morphing-text";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import CompareSpace from "./components/CompareSpace.vue";
import DecorFurniture from "./components/DecorFurniture.vue";
import { motion } from "motion-v";

const texts = [
  "The Future is Now",
  "Innovate Tomorrow",
  "Shaping What’s Ahead",
  "Dream. Build. Repeat.",
  "Beyond Imagination",
  "Tomorrow Starts Today",
  "Vision Becomes Reality",
  "Evolving with Time",
  "Where Ideas Take Flight",
];

const sentence =
  "At Hue, we believe furniture should do more than just fill a room — it should create an atmosphere. Our collections are designed with a balance of timeless elegance and modern functionality, crafted to bring warmth, comfort, and style into every corner of your home";

const whileInView = {
  opacity: 1,
  y: 0,
};

const animate = {
  opacity: 0,
  y: 100,
};

const exit = {
  opacity: 0,
  y: 100,
};
</script>

<template>
  <MorphingText
    :texts="texts"
    :morph-time="2"
    :cool-down-time="4"
    class="text-olive left-0 mx-0 mt-8 max-w-full text-start [filter:url(#threshold)_blur(0px)] md:h-12"
    class-text="text-4xl"
  />
  <div>
    <CompareSpace />
  </div>

  <motion.div :while-in-view="whileInView" :animate="animate" :exit="exit">
    <DecorFurniture />
  </motion.div>

  <motion.div
    class="layoutScroll motion-delay-100 container mx-auto mt-8 flex h-fit w-full items-center justify-center gap-4 md:grid-cols-2"
    :while-in-view="whileInView"
    :animate="animate"
    :exit="exit"
  >
    <img
      src="/chair.png"
      alt="chair"
      class="size-[500px] mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left object-cover"
    />

    <div class="flex h-64 w-1/2 items-center justify-center">
      <TextGenerateEffect :words="sentence" class="text-2xl text-black" />
    </div>
  </motion.div>
</template>
