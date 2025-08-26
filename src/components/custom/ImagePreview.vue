<template>
  <div>
    <Dialog :open="isOpen" @update:open="isOpen = $event">
      <DialogTrigger as-child>
        <slot v-if="slots.default" />
        <img
          v-else
          :src="currentImage"
          :alt="currentAlt"
          :class="cn('h-full w-full object-cover', classMain)"
        />
      </DialogTrigger>
      <DialogContent
        class="flex min-h-1/2 max-w-full min-w-[80vw] items-center justify-center"
      >
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div class="flex w-full items-center justify-between">
          <div
            @click.prevent="prevImage()"
            class="flex cursor-pointer items-center justify-center rounded-full bg-slate-200 p-2 transition hover:scale-105 hover:bg-slate-300"
          >
            <ChevronLeftIcon class="size-8" />
          </div>

          <motion.img
            :key="changeImage"
            :src="changeImage"
            :alt="currentAlt"
            :class="cn('size-[600px] rounded-2xl object-cover', classImage)"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :exit="{ opacity: 0 }"
            :transition="{ duration: 0.3, stiffness: 100, damping: 10 }"
          />

          <div
            @click.prevent="nextImage()"
            class="flex cursor-pointer items-center justify-center rounded-full bg-slate-200 p-2 transition hover:scale-105 hover:bg-slate-300"
          >
            <ChevronRightIcon class="size-8" />
          </div>
        </div>
      </DialogContent>
      <!-- <DialogFooter>
      <Button>Close</Button>
    </DialogFooter> -->
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-vue-next";
import { motion } from "motion-v";
import { computed, ref, useSlots, type HTMLAttributes } from "vue";

interface Props {
  //* the main image should be the first image in the array
  images: string[];

  //* the alt text should be the first alt text in the array
  alt: string[];
  classMain?: HTMLAttributes["class"];
  classImage?: HTMLAttributes["class"];
}

const slots = useSlots();

const props = withDefaults(defineProps<Props>(), {
  alt: () => ["previewing image"],
  classMain: "",
  classImage: "",
});

const currentIndex = ref(0);

const currentImage = ref(props.images[0]);

const changeImage = computed(() => props.images[currentIndex.value]);
const currentAlt = computed(() => props.alt[currentIndex.value] ?? "preview");

// next / prev without double increment
const nextImage = () => {
  currentIndex.value =
    currentIndex.value >= props.images.length - 1 ? 0 : currentIndex.value + 1;
};

const prevImage = () => {
  currentIndex.value =
    currentIndex.value <= 0 ? props.images.length - 1 : currentIndex.value - 1;

  console.log(currentIndex.value);
};

const isOpen = ref(false);
</script>
