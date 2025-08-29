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
        class="flex min-h-1/2 max-w-full min-w-[80vw] items-center justify-center p-20"
      >
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <Carousel
          v-slot="{ canScrollNext }"
          :opts="{
            loop: true,
            align: 'center',
          }"
        >
          <CarouselContent>
            <CarouselItem
              v-for="(image, index) in props.images"
              :key="index"
              class="flex items-center justify-center"
            >
              <motion.img
                :key="index"
                :src="image"
                :alt="`${index} + ${image}`"
                :class="cn('size-[600px] rounded-2xl object-cover', classImage)"
                :initial="{ opacity: 0 }"
                :animate="{ opacity: 1 }"
                :exit="{ opacity: 0 }"
                :transition="{ duration: 0.3, stiffness: 100, damping: 10 }"
              />
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious size="lg" class="cursor-pointer" />

          <CarouselNext size="lg" class="cursor-pointer" />
        </Carousel>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { motion } from "motion-v";
import { computed, ref, useSlots, type HTMLAttributes } from "vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface Props {
  images: string[];

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

const currentAlt = computed(() => props.alt[currentIndex.value] ?? "preview");

const isOpen = ref(false);
</script>
