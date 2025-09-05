<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

interface Props {
  class?: HTMLAttributes["class"];

  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  strokeMiterlimit?: number;
  strokeDasharray?: string;
  strokeDashoffset?: number;
}

const props = withDefaults(defineProps<Props>(), {
  width: 24,
  height: 24,
  fill: "url(#instagramGradient)",
  stroke: "none",
  strokeWidth: 0,
});
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    :class="
      cn(
        'size-5 transition duration-300 ease-in-out group-hover:scale-110',
        props.class,
      )
    "
    :width="props.width"
    :height="props.height"
    :fill="props.fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="instagramGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#feda75" />
        <stop offset="25%" stop-color="#fa7e1e" />
        <stop offset="50%" stop-color="#d62976" />
        <stop offset="75%" stop-color="#962fbf" />
        <stop offset="100%" stop-color="#4f5bd5" />
      </linearGradient>
    </defs>
    <path
      d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
    />
  </svg>
</template>
