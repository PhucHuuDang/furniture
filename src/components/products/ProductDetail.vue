<template>
  <div>
    <h1>Product Detail</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const productName = computed(() => route.params.productName);

// console.log(productName.value)
</script>
