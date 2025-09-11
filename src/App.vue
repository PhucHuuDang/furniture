<script setup lang="ts">
import { RouterView } from "vue-router";

import Navbar from "./components/common/Navbar.vue";
import Toaster from "./components/ui/toast/Toaster.vue";
import HelpsBox from "./components/footer/HelpsBox.vue";
import Footer from "./components/footer/Footer.vue";
import ObserverProvider from "./providers/ObserverProvider.vue";
</script>

<template>
  <ObserverProvider>
    <Toaster rich-colors />
    <div class="flex h-screen flex-col justify-between">
      <Navbar />

      <div class="mb-auto px-6 pt-20 md:px-8">
        <RouterView />
      </div>

      <footer class="w-full">
        <HelpsBox />

        <Footer />
      </footer>
    </div>
  </ObserverProvider>
</template>
