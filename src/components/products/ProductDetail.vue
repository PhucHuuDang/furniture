<script setup lang="ts">
import { computed, h, ref } from "vue";
import { useRoute } from "vue-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import { watchOnce } from "@vueuse/core";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { usd } from "@/utils/currency";
import { RadiantText } from "../ui/radiant-text";
import { RippleButton } from "../ui/ripple-button";
import VercelTab, { type Tab } from "../common/VercelTab.vue";
import { Divide, ReceiptTextIcon, StarIcon, TruckIcon } from "lucide-vue-next";

interface Color {
  name: string;
  desc: string;
}

const description = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
`;

const tabs: Tab[] = [
  {
    id: "details",
    label: "Product Details",
    icon: ReceiptTextIcon,
    tabComponent: h("div", "Product Details"),
  },
  {
    id: "reviews",
    label: "Reviews",
    icon: StarIcon,
    tabComponent: h("div", "Reviews"),
  },

  {
    id: "shipping",
    label: "Shipping Information",
    icon: TruckIcon,
    tabComponent: h("div", "Shipping Information"),
  },
];

const isDescriptionExpanded = ref<boolean>(false);

const getTab = ref<(typeof tabs)[0]["id"]>("details");

const colors = ref<Color[]>([
  {
    name: "red",
    desc: "Red soft texture",
  },
  {
    name: "green",
    desc: "Green soft texture",
  },
  {
    name: "blue",
    desc: "Blue soft texture",
  },
  {
    name: "amber",
    desc: "Amber Bright",
  },
]);

const colorClasses: Record<string, string> = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  amber: "bg-amber-500",
};

const colorsSelected = ref<string>(colors.value[0].name);

const route = useRoute();

const productName = computed(() => route.params.productName);

const emblaMainApi = ref<CarouselApi>();

const emblaThumbnailApi = ref<CarouselApi>();

const selectedIndex = ref<number>(0);

const onChangeTab = (tab: Tab) => {
  return (getTab.value = tab.id);
};

const onSelected = () => {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return;

  selectedIndex.value = emblaMainApi.value.selectedScrollSnap();

  emblaThumbnailApi.value.scrollTo(
    emblaThumbnailApi.value.selectedScrollSnap(),
  );
};

const onThumbClick = (index: number) => {
  if (!emblaThumbnailApi.value || !emblaThumbnailApi.value) return;

  emblaMainApi.value?.scrollTo(index);
};

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return;

  onSelected();
  emblaMainApi.on("select", onSelected);

  emblaMainApi.on("reInit", onSelected);
});
</script>

<template>
  <div class="p-8">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div class="col-span-2 w-full rounded-4xl text-center sm:w-auto">
        <Carousel
          class="relative w-full"
          @init-api="(val) => (emblaMainApi = val)"
          :opts="{
            align: 'center',
            loop: true,
          }"
        >
          <CarouselContent>
            <CarouselItem
              class="max-h-md flex h-full items-center justify-center"
              v-for="(image, index) in 10"
              :key="index"
            >
              <img
                :src="`/chair.png`"
                :alt="`Product Image ${index + 1}`"
                class="h-[600px] w-[600px] object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            class="hover:bg-focus-color -left-0 size-10 cursor-pointer transition duration-200 hover:scale-110"
            class-icon="size-5"
          />
          <CarouselNext
            class="hover:bg-focus-color -right-0 size-10 cursor-pointer transition duration-200 hover:scale-110"
          />
        </Carousel>

        <Carousel
          class="relative w-full rounded-b-4xl"
          @init-api="(val) => (emblaThumbnailApi = val)"
          :opts="{
            align: 'start',
          }"
        >
          <CarouselContent class="ml-0 flex gap-1">
            <CarouselItem
              v-for="(_, index) in 10"
              :key="index"
              class="basis-1/4 cursor-pointer pl-0 md:basis-1/5 lg:basis-1/6"
              @click="onThumbClick(index)"
            >
              <div
                class="p-1"
                :class="index === selectedIndex ? '' : 'opacity-50'"
              >
                <Card>
                  <CardContent
                    class="flex aspect-square items-center justify-center p-6"
                  >
                    <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div class="col-span-1 flex flex-col gap-6 p-4">
        <Badge class="rounded-4xl p-2" variant="outline"> Category Sofa </Badge>
        <h1 class="text-4xl font-medium">{{ productName }}</h1>

        <span class="text-dark-text text-sm font-medium">
          Stars (4.9) 900+ reviews
        </span>

        <div class="flex items-center gap-2">
          <del class="text-2xl text-slate-300">
            {{ usd(800) }}
          </del>
          <span class="text-4xl">
            {{ usd(652) }}
          </span>
        </div>

        <!-- Description -->
        <div class="flex flex-col gap-2">
          <spam class="text-lg">Description</spam>
          <p class="text-sm/6 tracking-wide text-gray-500">
            {{
              isDescriptionExpanded ? description : description.slice(0, 100)
            }}

            <RadiantText
              class="inline-block cursor-pointer text-amber-400 transition-colors duration-300 hover:text-amber-600"
              @click="isDescriptionExpanded = !isDescriptionExpanded"
            >
              {{ isDescriptionExpanded ? "Read less..." : "Read more..." }}
            </RadiantText>
          </p>
        </div>

        <!-- Colors -->

        <span class="text-lg">Colors Available</span>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <div
              v-for="(color, index) in colors"
              :class="`${colorClasses[color.name]} h-7 w-7 cursor-pointer rounded-full border-2 ring-2 transition ease-in-out ${colorsSelected === color.desc ? 'ring-stone-700/50' : 'ring-transparent'}`"
              :index="index"
              @click="colorsSelected = color.desc"
            />
          </div>
          <span class="text-dark-text text-sm">{{ colorsSelected }}</span>
        </div>

        <!-- Add to Cart -->
        <div class="mt-2 flex items-center gap-2">
          <RippleButton
            class="w-52 rounded-4xl transition duration-300 hover:bg-slate-50"
          >
            Buy Now
          </RippleButton>
          <RippleButton
            class="w-52 rounded-4xl transition duration-300 hover:bg-slate-50"
          >
            Add to Cart
          </RippleButton>
        </div>
      </div>

      <div class="my-10 w-full">
        <VercelTab
          :tabs="tabs"
          class-icon="size-6"
          class="text-base"
          :on-change-tab="onChangeTab"
        />

        <div class="mt-4 w-full">
          <div v-for="tab in tabs" :key="tab.id">
            <div v-if="tab.id === getTab">
              <div>
                {{ tab.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
