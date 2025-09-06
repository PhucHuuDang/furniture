<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
  return route.matched.map((r) => {
    let label =
      typeof r.meta.breadcrumb === "function"
        ? r.meta.breadcrumb(route)
        : r.meta.breadcrumb;

    return {
      name: r.name,
      path: r.path,
      label,
    };
  });
});

const navigate = (path: string) => {
  router.push(path);
};
</script>

<template>
  <nav class="flex items-center space-x-2 text-sm text-gray-600">
    <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
      <span
        v-if="index < breadcrumbs.length - 1"
        class="cursor-pointer hover:underline"
        @click="navigate(crumb.path)"
      >
        {{ crumb.label }}
      </span>
      <span v-else class="font-semibold text-gray-900">
        {{ crumb.label }}
      </span>

      <span v-if="index < breadcrumbs.length - 1">/</span>
    </template>
  </nav>
</template>
