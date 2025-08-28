<script setup lang="ts">
import { RouterView } from "vue-router";

import Navbar from "./components/common/Navbar.vue";
import Toaster from "./components/ui/toast/Toaster.vue";
</script>

<template>
  <Toaster rich-colors />
  <Navbar />

  <div class="px-6 pt-20 md:px-8">
    <RouterView />
  </div>
</template>
