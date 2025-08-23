<template>
  <div
    class="bg-background/80 border-border/20 fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b px-10 pt-4 backdrop-blur-lg"
  >
    <div class="text-olive flex items-center gap-1 text-2xl font-semibold">
      <img src="/logo.png" alt="logo" class="h-14 w-14" />
      Huez
    </div>

    <div
      class="bg-background/5 border-border flex items-center gap-3 rounded-full border px-1 py-1 shadow-lg backdrop-blur-lg"
    >
      <RouterLink
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        :class="
          cn(
            'text-foreground/80 hover:text-primary relative cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-colors',
            isActive(route.path) && 'text-primary bg-focus-color',
          )
        "
        @click="tab = route.path"
      >
        <span class="text-dark-text hidden md:inline">{{ route.label }}</span>
        <motion.div
          layout
          class="bg-primary/5 absolute inset-0 -z-10 w-full cursor-pointer rounded-full"
          :initial="false"
          :transition="{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }"
          :while-hover="{
            scale: 1.05,
          }"
          v-if="isActive(route.path)"
        >
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full"
          >
            <div
              className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2"
            />
            <div
              className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1"
            />
            <div
              className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2"
            />
          </div>
        </motion.div>
      </RouterLink>
    </div>

    <div class="flex items-center gap-4">
      <ShoppingBag />

      <User />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LiquidGlass } from "../ui/liquid-glass";

import { RouterLink } from "vue-router";

import { computed, ref } from "vue";

import { motion } from "motion-v";
import { cn } from "@/lib/utils";
import ShoppingBag from "../home/ShoppingBag.vue";
import User from "../home/User.vue";

interface Route {
  path: string;
  label: string;
}

const tab = ref("/");

// console.log(tab.value, "tab");

const isActive = computed(() => {
  return (path: string) => {
    return tab.value === path;
  };
});

const routes: Route[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/products",
    label: "Products",
  },
  {
    path: "/gallery",
    label: "Gallery",
  },
];
</script>
