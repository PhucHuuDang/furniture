<script setup lang="ts">
import { FlipCard } from "@/components/ui/flip-card";
import type { Component, HTMLAttributes } from "vue";

import sofaIcon from "/about-source/sofa-icon.png";
import { Separator } from "@/components/ui/separator";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

interface ContentProps {
  image?: string;
  title: string;
  icon?: Component;
  description: string;

  link?: string;

  class?: HTMLAttributes["class"];
}
interface FrontContentProps
  extends Pick<ContentProps, "class" | "title" | "image"> {}

interface BackContentProps
  extends Pick<
    ContentProps,
    "class" | "title" | "description" | "link" | "icon" | "image"
  > {}
const content: {
  rotate?: "x" | "y";
  front: FrontContentProps;
  back: BackContentProps;
}[] = [
  {
    rotate: "x",
    front: {
      image: "/coma-chair.png",
      title: "Scandinavian",
    },
    back: {
      title: "Scandinavian Style",
      description:
        "Scandinavian style emphasizes light interiors, clean lines, and functional furniture with natural wood finishes.",
      image: sofaIcon,
      class: "",
    },
  },
  {
    rotate: "y",
    front: {
      image: "/coma-chair.png",
      title: "Minimalist",
    },
    back: {
      title: "Minimalist Style",
      description:
        "Minimalist style is defined by simplicity, open spaces, and neutral colors where every item has a clear purpose.",
      image: sofaIcon,
    },
  },
  {
    rotate: "x",
    front: {
      image: "/coma-chair.png",
      title: "Bohemian",
    },
    back: {
      title: "Bohemian Style",
      description:
        "Bohemian style combines eclectic furniture, vibrant colors, and layered textures to create a cozy, artistic home.",
      image: sofaIcon,
    },
  },
  {
    rotate: "y",
    front: {
      image: "/chair.png",
      title: "Japanese Zen",
    },
    back: {
      title: "Japanese Zen Style",
      description:
        "Japanese Zen style highlights balance, tranquility, and natural materials like wood, stone, and paper screens.",
      image: sofaIcon,
    },
  },
  {
    rotate: "x",
    front: {
      image: "/chair.png",
      title: "Industrial",
    },
    back: {
      title: "Industrial Style",
      description:
        "Industrial style showcases raw materials such as brick, steel, and concrete for a bold urban loft atmosphere.",
      image: sofaIcon,
    },
  },
];
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center overflow-hidden py-10"
  >
    <h1 class="text-olive z-10 mb-6 text-2xl font-bold md:text-4xl">
      Decor Styles
    </h1>

    <!-- Cards -->
    <div class="relative z-10 flex flex-wrap items-center justify-center gap-6">
      <FlipCard
        :rotate="rotate"
        class="z-10 h-96 w-80 rounded-3xl p-2"
        class-front="rounded-3xl bg-white"
        class-back="bg-white/80 backdrop-blur-md rounded-3xl z-10"
        v-for="({ front, back, rotate }, index) in content"
        :key="front.title"
      >
        <template #default>
          <div class="group flex size-full items-center justify-center">
            <img
              :src="front.image"
              :alt="front.title"
              class="size-full rounded-3xl object-cover shadow-lg shadow-black/30"
            />
          </div>
        </template>

        <template #back>
          <div
            class="flex flex-col items-center justify-center px-4 py-6 text-center"
          >
            <img
              :src="back.image"
              :alt="back.title"
              class="mb-3 size-20 object-contain"
            />
            <Separator class="my-2 w-2/3" />
            <span class="text-sm leading-relaxed text-slate-700 md:text-base">
              {{ back.description }}
            </span>
          </div>
        </template>
      </FlipCard>
    </div>

    <!-- Background pattern -->
    <InteractiveGridPattern
      :class="[
        'absolute inset-0 -z-0 h-full w-full',
        'skew-y-12 opacity-70',
        '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
      ]"
    />
  </div>
</template>
