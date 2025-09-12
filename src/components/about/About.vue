<script setup lang="ts">
import { MorphingText } from "../ui/morphing-text";
import CompareSpace from "./components/CompareSpace.vue";
import DecorFurniture from "./components/DecorFurniture.vue";

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
</script>

<template>
  <MorphingText
    :texts="texts"
    :morph-time="2"
    :cool-down-time="4"
    class="text-olive left-0 mx-0 max-w-full text-start [filter:url(#threshold)_blur(0px)] md:h-12"
    class-text="text-4xl"
  />
  <div>
    <CompareSpace />
  </div>

  <div>
    <DecorFurniture />
  </div>
</template>
