<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { motion } from "motion-v";

// Props
interface NavItem {
  name: string;
  url: string;
  icon: any;
}

defineProps<{
  items: NavItem[];
  className?: string;
}>();

const activeTab = ref<string>("/");
const isMobile = ref(false);

onMounted(() => {
  const handleResize = () => {
    isMobile.value = window.innerWidth < 768;
  };

  // activeTab.value = "/";

  handleResize();
  window.addEventListener("resize", handleResize);
  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });
});
</script>

<template>
  <!-- <div
    :class="[
      'fixed bottom-0 left-1/2 z-50 mb-6 -translate-x-1/2 sm:top-0 sm:pt-6',
      className,
    ]"
  > -->
  <div
    class="bg-background/5 border-border flex items-center gap-3 rounded-full border px-1 py-1 shadow-lg backdrop-blur-lg"
  >
    <RouterLink
      v-for="item in items"
      :key="item.name"
      :to="item.url"
      @click="activeTab = item.url"
      :class="[
        'relative cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-colors',
        'text-foreground/80 hover:text-primary',
        activeTab === item.url && 'text-primary bg-focus-color',
      ]"
    >
      <!-- Name (desktop) -->
      <span class="hidden md:inline">{{ item.name }}</span>

      <!-- Icon (mobile) -->
      <span class="md:hidden">
        <component :is="item.icon" :size="18" :stroke-width="2.5" />
      </span>

      <!-- Animated background (active tab) -->
      <motion.div
        v-if="activeTab === item.url"
        layoutId="lamp"
        class="bg-primary/5 absolute inset-0 -z-10 w-full rounded-full"
        :initial="false"
        :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
      >
        <div
          class="bg-primary absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"
        >
          <div
            class="bg-primary/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md"
          />
          <div
            class="bg-primary/20 absolute -top-1 h-6 w-8 rounded-full blur-md"
          />
          <div
            class="bg-primary/20 absolute top-0 left-2 h-4 w-4 rounded-full blur-sm"
          />
        </div>
      </motion.div>
    </RouterLink>
  </div>
  <!-- </div> -->
</template>
