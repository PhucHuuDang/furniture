<template>
  <header
    class="bg-background/80 border-border/20 fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b px-10 pt-4 backdrop-blur-lg"
  >
    <div class="text-olive flex items-center gap-1 text-2xl font-semibold">
      <img src="/logo.png" alt="logo" class="h-14 w-14" />
      Huez
    </div>

    <TubeLight :items="navItems" />

    <div class="flex items-center gap-4">
      <ShoppingBag />

      <User />
    </div>
  </header>
</template>

<script setup lang="ts">
import { LiquidGlass } from "../ui/liquid-glass";

import { computed, ref } from "vue";

import ShoppingBag from "../home/ShoppingBag.vue";
import User from "../home/User.vue";
import TubeLight from "./TubeLight.vue";

import {
  BriefcaseIcon,
  FileTextIcon,
  HomeIcon,
  UserIcon,
} from "lucide-vue-next";

interface Route {
  path: string;
  label: string;
}

const tab = ref("/");

// const MotionDiv = motion("div");

console.log(tab.value, "tab");

const navItems = [
  { name: "Home", url: "/", icon: HomeIcon },
  { name: "About", url: "/about", icon: UserIcon },
  { name: "Products", url: "/products", icon: BriefcaseIcon },
  { name: "Gallery", url: "/gallery", icon: FileTextIcon },
];

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
