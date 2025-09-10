<script setup lang="ts">
import InteractiveEmptyState from "@/components/empty-state/InteractiveEmptyState.vue";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { ReviewProps } from "@/utils/data";
import { HeartIcon, MessageCircleIcon, Star } from "lucide-vue-next";
import { reactive, ref, watch } from "vue";

import { Plus, Code2, Rocket } from "lucide-vue-next";

const props = defineProps<{
  reviews: ReviewProps[];
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

const feedbackInfo = reactive<{
  images: string[] | null;
  userName: string | null;
}>({
  images: null,
  userName: null,
});

const getImagesFeedback = (id: number) => {
  const images =
    props.reviews.find((review) => review.id === id)?.images || null;

  const userName = props.reviews.find((review) => review.id === id)?.name || "";

  if (images) {
    feedbackInfo.images = images;
    feedbackInfo.userName = userName;
  } else {
    feedbackInfo.images = null;
    feedbackInfo.userName = null;
  }
};

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

const handleAction = (action: string) => {
  console.log(action);
};
</script>

<template>
  <div class="flex">
    <div class="flex-1 overflow-y-auto pr-2">
      <!-- reviews here -->
      <div
        class="group relative isolate my-2 flex w-full max-w-2xl cursor-pointer flex-col gap-4 overflow-hidden rounded-4xl border border-gray-200 p-4 transition duration-200 hover:border-gray-300 md:min-w-2xl"
        @mousemove="(e) => handleMouseMove(e, index)"
        @mouseleave="(e) => handleMouseLeave(index)"
        v-for="(review, index) in props.reviews"
        :key="review.id"
        @click="getImagesFeedback(review.id)"
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
                  @click="
                    interaction.text === 'Like' ? handleClick(index) : null
                  "
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
    </div>

    <div class="w-[450px] shrink-0">
      <div
        v-if="feedbackInfo.userName && feedbackInfo.images"
        class="sticky top-24"
      >
        <h3 class="text-base font-semibold capitalize italic">
          Images Feedback from ( {{ feedbackInfo.userName }})
        </h3>

        <div class="flex items-center gap-3 overflow-x-auto">
          <img
            v-for="(image, index) in feedbackInfo.images"
            :key="index"
            :src="image"
            class="h-[200px] w-[200px] object-cover"
          />
        </div>
      </div>

      <div v-else class="sticky top-14">
        <InteractiveEmptyState
          theme="light"
          title="No Projects Added"
          description="Showcase your work..."
          :icons="[Plus, Plus, Plus]"
          :action="{
            label: 'Add Project',
            icon: Plus,
            onClick: () => handleAction('Projects'),
          }"
        />
      </div>
    </div>
  </div>
</template>
