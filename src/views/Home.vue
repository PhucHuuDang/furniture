<template>
  <Banner />
  <div class="mb-10 w-full pt-5">
    <Reference />
  </div>
  <Slider />

  <ShopByCategory />
</template>

<script setup lang="ts">
import Banner from "@/components/home/Banner.vue";
import Reference from "@/components/home/Reference.vue";
import ShopByCategory from "@/components/home/shop/ShopByCategory.vue";
import Slider from "@/components/home/Slider.vue";
</script>
