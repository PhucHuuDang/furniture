<template>
  <nav class="flex items-center space-x-2 text-sm text-gray-600">
    <template v-for="(crumb, index) in breadcrumbs" :key="index">
      <span
        class="cursor-pointer transition hover:underline"
        @click="goTo(crumb)"
      >
        {{ crumb.label }}
      </span>
      <span v-if="index < breadcrumbs.length - 1">›</span>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

console.log(route.matched);

const breadcrumbs = computed(() => {
  return route.matched.map((r) => {
    let label = r.meta.breadcrumb as string | ((r: typeof route) => string);
    if (typeof label === "function") {
      label = label(route);
    }
    return {
      label,
      to: { name: r.name, params: route.params },
    };
  });
});

console.log(breadcrumbs.value);

function goTo(crumb: { to: any }) {
  router.push(crumb.to);
}
</script>
