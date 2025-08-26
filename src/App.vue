<script setup lang="ts">
import { RouterView } from "vue-router";

import Navbar from "./components/common/Navbar.vue";
import { Toaster } from "./components/ui/sonner";
</script>

<template>
  <Toaster />
  <Navbar />

  <div class="px-6 pt-20 md:px-8">
    <RouterView />
  </div>
</template>
