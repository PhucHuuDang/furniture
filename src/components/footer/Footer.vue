<script setup lang="ts">
import {
  Building2Icon,
  FacebookIcon,
  HeadsetIcon,
  InstagramIcon,
  LibraryIcon,
  LinkedinIcon,
  TwitterIcon,
  UsersIcon,
} from "lucide-vue-next";
import Logo from "../common/Logo.vue";
import { LinkPreview } from "../ui/link-preview";
import Instagram from "../icon/Instagram.vue";
import type { Component } from "vue";
import { RadiantText } from "../ui/radiant-text";
import { motion } from "motion-v";

interface SocialLink {
  url: string;
  icon: Component;
  hoverClass: string;
}

interface FooterSection {
  icon: Component;
  title: string;
  items: string[];
}

const socialLinks: SocialLink[] = [
  {
    url: "https://tailwindcss.com",
    icon: FacebookIcon,
    hoverClass: "group-hover:scale-110 group-hover:text-sky-500",
  },
  {
    url: "https://tailwindcss.com",
    icon: Instagram,
    hoverClass: "group-hover:scale-110 group-hover:text-pink-500",
  },
  {
    url: "https://tailwindcss.com",
    icon: TwitterIcon,
    hoverClass: "group-hover:scale-110 group-hover:text-blue-400",
  },
  {
    url: "https://tailwindcss.com",
    icon: LinkedinIcon,
    hoverClass: "group-hover:scale-110 group-hover:text-sky-600",
  },
];

const footerSections: FooterSection[] = [
  {
    icon: Building2Icon,
    title: "Company",
    items: ["About us", "Blog", "Contact us", "Careers"],
  },
  {
    icon: UsersIcon,
    title: "Customer Service",
    items: ["My Account", "Track Your Orders", "Return", "FAQ"],
  },
  {
    icon: LibraryIcon,
    title: "Our Information",
    items: ["Privacy", "User Term & Conditions", "Return Policy"],
  },
  {
    icon: HeadsetIcon,
    title: "Contact Info",
    items: [
      "+84814593739",
      "danghuuphuc001@gmail.com",
      "vinhomesgrandpark, Ho Chi Minh City, Vietnam",
    ],
  },
];

const whileInView = {
  opacity: 1,
  y: 0,
};

const animate = {
  opacity: 0,
  y: 100,
};

const exit = {
  opacity: 0,
  y: 100,
};
</script>

<template>
  <motion.div
    class="my-1 grid grid-cols-2 gap-4 px-10 py-8 md:px-12 lg:grid-cols-5"
    :while-in-view="whileInView"
    :animate="animate"
    :exit="exit"
  >
    <!-- Logo and Socials -->
    <div class="flex flex-col gap-2">
      <Logo class-img="size-12">
        <RadiantText
          :radiant-width="500"
          class="mx-0 flex cursor-pointer items-start text-3xl font-semibold transition duration-300 ease-in-out hover:text-stone-500"
        >
          <span>Huez</span>
        </RadiantText>
      </Logo>

      <RadiantText class="">
        Welcome to the world comfort of your home
      </RadiantText>

      <!-- social list -->
      <div class="flex items-center gap-2">
        <LinkPreview
          v-for="({ url, icon, hoverClass }, i) in socialLinks"
          :key="i"
          :url="url"
          class="group flex items-center justify-center rounded-full bg-gray-100 p-2 transition duration-300 ease-in-out hover:bg-gray-200"
        >
          <component
            :is="icon"
            class="size-5 transition duration-300 ease-in-out"
            :class="hoverClass"
          />
        </LinkPreview>
      </div>
    </div>

    <!-- Company -->

    <div
      v-for="section in footerSections"
      :key="section.title"
      class="flex flex-col gap-4"
    >
      <div class="flex items-center gap-1">
        <component :is="section.icon" class="size-5 font-semibold" />
        <h3 class="text-lg font-semibold">{{ section.title }}</h3>
      </div>
      <div class="flex flex-col gap-2">
        <span
          v-for="(item, index) in section.items"
          :key="index"
          class="hover:text-olive cursor-pointer text-sm transition duration-200 ease-out hover:underline"
        >
          {{ item }}
        </span>
      </div>
    </div>

    <span class="text-sm text-gray-500"
      >@Copyright 2025 Huu Phuc Dang. All rights reserved.</span
    >
  </motion.div>

  <!-- <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold">Company</h3>

      <div class="flex flex-col gap-2">
        <span
          class="md:text-olive cursor-pointer text-sm transition duration-200 ease-in-out hover:text-stone-500 hover:underline"
          >About us</span
        >
        <span>Blog</span>
        <span>Contact us</span>
        <span>Careers</span>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold">Customer Service</h3>

      <div class="flex flex-col gap-2">
        <span>My Account</span>
        <span>Track Your Orders</span>
        <span>Return</span>
        <span>FAQ</span>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold">Our Information</h3>

      <div class="flex flex-col gap-2">
        <span>Privacy</span>
        <span>User Term & Conditions</span>
        <span>Return Policy</span>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold">Contact Info</h3>

      <div class="flex flex-col gap-2">
        <span>+84814593739</span>
        <span>danghuuphuc001@gmail.com</span>
        <span>vinhomesgrandpark, Ho Chi Minh City, Vietnam</span>
      </div>
    </div>
  </div> -->

  <!-- Copyright -->
</template>
