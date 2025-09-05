<template>
  <header
    class="bg-background/80 border-border/20 fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b px-10 py-3 shadow-sm backdrop-blur-2xl"
  >
    <Logo class-text="text-3xl" class-img="size-12" />

    <TubeLight :items="navItems" />

    <div class="flex items-center gap-4">
      <SearchProduct />
      <ShoppingBag />

      <User />
    </div>
  </header>
</template>

<script setup lang="ts">
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
import Logo from "@/components/common/Logo.vue";
import SearchProduct from "./SearchProduct.vue";

const tab = ref("/");

console.log(tab.value, "tab");

const navItems = [
  { name: "Home", url: "/", icon: HomeIcon },
  { name: "About", url: "/about", icon: UserIcon },
  { name: "Products", url: "/products", icon: BriefcaseIcon },
  { name: "Gallery", url: "/gallery", icon: FileTextIcon },
];
</script>
