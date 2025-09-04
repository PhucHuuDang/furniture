<script setup lang="ts">
import ProductCardBackground from "@/components/common/ProductCardBackground.vue";
import { RippleButton } from "@/components/ui/ripple-button";
import { Skeleton } from "@/components/ui/skeleton";
import { wait } from "@/lib/simulate";
import { data } from "@/utils/data";
import {
  ArrowUpIcon,
  ChevronRightIcon,
  CornerDownLeftIcon,
  CornerDownRightIcon,
  LoaderCircleIcon,
  PlusIcon,
} from "lucide-vue-next";
import { computed, nextTick, onMounted, ref, watch } from "vue";

const more = ref<number>(4);

const selectedCategory = ref<string>("all");

const isLoading = ref<boolean>(false);

const categoryRefs = ref<HTMLElement[]>([]);
const arrowTop = ref<number>(0);

const listRef = ref<HTMLElement[] | null>([]);

const seeMore = async () => {
  isLoading.value = true;
  await wait(3000);
  more.value += 4;

  isLoading.value = false;
};

const getCategories = () => {
  return ["all", ...new Set(data.map((item) => item.category))];
};

const handleCategoryClick = async (category: string) => {
  selectedCategory.value = category;

  await nextTick();
  updateArrow();
};

const updateArrow = () => {
  const index = getCategories().indexOf(selectedCategory.value);
  const el = categoryRefs.value[index];
  if (el && listRef.value) {
    // ✅ relative to list container instead of viewport
    arrowTop.value = el.offsetTop + el.offsetHeight / 2 + 7;
  }
};

const filteredData = computed(() => {
  return data.filter((item) => {
    if (selectedCategory.value === "all") {
      return true;
    } else {
      return item.category === selectedCategory.value;
    }
  });
});

onMounted(() => {
  updateArrow();
});

watch(selectedCategory, () => {
  console.log(arrowTop.value);

  updateArrow();
});
</script>

<template>
  <div class="my-10 px-8">
    <!-- <h1>Shop By Category</h1> -->

    <div
      class="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <!-- The category list and the curve line -->
      <div class="relative flex flex-col gap-4">
        <div class="p-4">
          <div class="relative">
            <h1 class="text-olive text-xl md:text-3xl">Shop by Categories</h1>

            <!-- Curve line -->
            <div
              class="absolute top-8 left-2.5 w-5 rounded-bl-lg border-b-2 border-l-2 transition-all duration-300"
              :style="{ height: arrowTop + 'px' }"
            >
              <ChevronRightIcon
                class="absolute -right-2 -bottom-[0.5px] size-5 translate-y-1/2 text-[#e7e5e4] transition-transform duration-300"
              />
            </div>
          </div>

          <!-- The content of category list -->
          <ul ref="listRef" class="relative ml-9 gap-4 space-y-2 pl-2">
            <li
              v-for="(category, i) in getCategories()"
              :key="category"
              :ref="(el) => (categoryRefs[i] = el as HTMLElement)"
              class="text-dark-text flex cursor-pointer items-center gap-2 text-lg capitalize transition duration-200 hover:scale-105"
              @click="handleCategoryClick(category)"
              :class="
                selectedCategory === category &&
                'text-olive scale-105 font-bold underline'
              "
            >
              {{ category }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-2">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ProductCardBackground
            v-for="item in filteredData.slice(0, more)"
            :key="item.title"
            :title="item.title"
            :description="item.description"
            :image="item.image"
            :price="item.price"
            :discount="item.discount"
            :url="item.url"
            :buy="item.buy"
            :stars="item.stars"
            :category="item.category"
          />

          <Skeleton
            v-for="n in 4"
            v-if="isLoading"
            :key="'skeleton-' + n"
            class="rounded-4xl"
          />
        </div>
        <RippleButton
          :class="`border-olive-green/20 bg-olive-green/10 text-olive-green hover:bg-olive/20 mx-auto mt-4 flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm transition-all duration-200 hover:scale-105 ${isLoading && 'cursor-not-allowed'}`"
          ripple-color="olive"
          class-slot="flex items-center justify-center gap-1"
          @click="seeMore"
          :disabled="isLoading"
        >
          View More <PlusIcon v-if="!isLoading" class="size-6" />

          <LoaderCircleIcon v-if="isLoading" class="size-6 animate-spin" />
        </RippleButton>
      </div>
    </div>
  </div>
</template>
