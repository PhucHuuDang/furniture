<script setup lang="ts">
import RenderDataTableDetail from "@/components/common/RenderDataTableDetail.vue";

const data = [
  { values: ["Product code", "#250130034800", "Extra Info"] },
  { values: ["Color", "Orange, Green, Amber", "Popular choice"] },
  { values: ["Size", "(W) 76 x (D) 84 x (H) 105 cm", "Big size"] },
];
</script>

<template>
  <div class="mx-auto w-full p-1">
    <h1 class="mb-4 text-2xl font-semibold">Product Details</h1>

    <p class="mb-4 text-sm text-gray-500">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nam iste
      ratione perspiciatis, odit explicabo aliquam temporibus reiciendis nostrum
      in eveniet, blanditiis adipisci aspernatur dolorem nihil dolore quas!
      Quia, ut!
    </p>

    <RenderDataTableDetail :data="data" />
  </div>
</template>
