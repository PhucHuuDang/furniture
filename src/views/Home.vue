<template>
  <Banner />
  <div class="mb-10 w-full pt-5">
    <Reference />
  </div>
  <Slider />

  <ShopByCategory />

  <PreOrderSlider />
</template>

<script setup lang="ts">
import Banner from "@/components/home/Banner.vue";
import Reference from "@/components/home/Reference.vue";
import ShopByCategory from "@/components/home/shop/ShopByCategory.vue";
import PreOrderSlider from "@/components/home/PreOrderSlider.vue";
import Slider from "@/components/home/Slider.vue";
</script>
