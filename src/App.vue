<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/common/Navbar.vue";
</script>

<template>
  <Navbar />

  <div class="px-6 pt-20 md:px-8">
    <RouterView />
  </div>
</template>
