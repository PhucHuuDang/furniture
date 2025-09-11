<script setup lang="ts">
import { onMounted } from "vue";
import { Observer } from "tailwindcss-intersect";

onMounted(() => {
  Observer.start();
});
</script>

<template>
  <slot />
</template>
