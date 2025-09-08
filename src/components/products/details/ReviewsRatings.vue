<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HeartIcon, MessageCircleIcon, Star } from "lucide-vue-next";
import { reactive, ref, watch } from "vue";

const props = defineProps<{
  reviews: {
    id: number;
    name: string;
    avatar: string;
    fallback: string;
    date: string;
    rating: number;
    text: string;
  }[];
}>();

const interactions = [
  {
    icon: HeartIcon,
    color: "currentColor",
    hoverColor: "hover:bg-focus-color",
    text: "Like",
  },
  {
    icon: MessageCircleIcon,
    color: "currentColor",
    hoverColor: "hover:bg-focus-color",
    text: "Comment",
  },
];

const mouseX = ref<number[]>([]);
const mouseY = ref<number[]>([]);
const isInside = ref<boolean[]>([]);
const like = ref<boolean[]>([]);

const handleMouseMove = (event: MouseEvent, index: number) => {
  const target = event.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();

  mouseX.value[index] = event.clientX - rect.left;
  mouseY.value[index] = event.clientY - rect.top;
  isInside.value[index] = true;
};

const handleMouseLeave = (index: number) => {
  isInside.value[index] = false;
};

const handleClick = (index: number) => {
  like.value[index] = !like.value[index];
};

watch(
  () => props.reviews,
  (reviews) => {
    like.value = Array(reviews.length).fill(false);
    mouseX.value = Array(reviews.length).fill(0);
    mouseY.value = Array(reviews.length).fill(0);
    isInside.value = Array(reviews.length).fill(false);
  },
  { immediate: true },
);
</script>

<template>
  <div
    class="group relative isolate my-2 flex w-full max-w-2xl cursor-pointer flex-col gap-4 overflow-hidden rounded-4xl border border-gray-200 p-4 transition duration-200 hover:border-gray-300 md:min-w-2xl"
    @mousemove="(e) => handleMouseMove(e, index)"
    @mouseleave="(e) => handleMouseLeave(index)"
    v-for="(review, index) in props.reviews"
    :key="review.id"
  >
    <!-- avatar & rating -->
    <div class="flex items-center justify-between mix-blend-lighten">
      <div class="flex items-center gap-2">
        <Avatar class="size-10">
          <AvatarImage :src="review.avatar" />
          <AvatarFallback>{{ review.name.charAt(0) }}</AvatarFallback>
        </Avatar>

        <div>
          <h3 class="text-lg font-medium">{{ review.name }}</h3>
          <p class="text-sm text-gray-500">{{ review.date }}</p>
        </div>
      </div>

      <div class="flex items-center gap-1">
        <Star class="size-4.5 text-amber-500" fill="currentColor" />
        <span class="text-base font-medium">{{ review.rating }}</span>
      </div>
    </div>

    <p class="line-clamp-2 text-base/7">
      {{ review.text }}
    </p>

    <div class="flex items-center gap-2">
      <template v-for="interaction in interactions" :key="interaction.text">
        <HoverCard :openDelay="200">
          <HoverCardTrigger as-child>
            <component
              :is="interaction.icon"
              :class="interaction.hoverColor"
              :fill="
                interaction.text === 'Like' && like[index]
                  ? 'currentColor'
                  : 'none'
              "
              class="size-8 rounded-full bg-slate-200/50 p-2"
              @click="interaction.text === 'Like' ? handleClick(index) : null"
            />
          </HoverCardTrigger>
          <HoverCardContent
            class="w-fit border-0 shadow-none"
            :sideOffset="10"
            side="top"
          >
            <span class="text-sm underline">{{ interaction.text }}</span>
          </HoverCardContent>
        </HoverCard>
      </template>
    </div>

    <!-- tracking circle -->
    <div
      class="pointer-events-none absolute size-80 rounded-full bg-slate-500/5 mix-blend-lighten"
      :class="
        isInside[index]
          ? 'scale-100 opacity-100 transition duration-[20ms]'
          : 'scale-50 opacity-0 transition duration-300 ease-in-out'
      "
      :style="{
        transform: `translate(${mouseX[index] - 160}px, ${mouseY[index] - 160}px)`,
      }"
    />
  </div>
</template>
