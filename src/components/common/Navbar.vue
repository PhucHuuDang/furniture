<template>
  <header
    class="bg-background/80 border-border/20 intersect-once intersect:motion-preset-slide-up fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b px-4 py-1 shadow-sm backdrop-blur-2xl md:px-10 md:py-2"
  >
    <Logo class-text="text-3xl" class-img="size-12" class="flex-1" />

    <div class="">
      <TubeLight :items="navItems" />
    </div>

    <div class="flex flex-1 items-center justify-end-safe gap-4">
      <SearchProduct />
      <ShoppingBag />

      <User />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

import ShoppingBag from "../home/ShoppingBag.vue";
import User from "../home/User.vue";
import TubeLight from "./TubeLight.vue";

import {
  BriefcaseIcon,
  FileTextIcon,
  HomeIcon,
  UserIcon,
} from "lucide-vue-next";
import Logo from "@/components/common/Logo.vue";
import SearchProduct from "./SearchProduct.vue";
const isOpen = ref(false);
const tab = ref("/");

console.log(tab.value, "tab");

const navItems = [
  { name: "Home", url: "/", icon: HomeIcon },
  { name: "About", url: "/about", icon: UserIcon },
  { name: "Products", url: "/products", icon: BriefcaseIcon },
  { name: "Gallery", url: "/gallery", icon: FileTextIcon },
];
</script>
