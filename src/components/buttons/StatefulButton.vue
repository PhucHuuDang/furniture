<script setup lang="ts">
import { ref } from "vue";
import { animate } from "motion-v";
import { CheckIcon, Loader2Icon } from "lucide-vue-next";

import { useToast } from "@/components/ui/toast/use-toast.ts";

interface ButtonProps {
  class?: string;

  delay?: number;
  title?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  delay: 1000,
  title: "Success",
});

const { toast } = useToast();

// get the button element from props
const emit = defineEmits<{
  (e: "click", ev: MouseEvent): void;
}>();

const scope = ref<HTMLElement | null>(null);

const isLoading = ref(false);

const isSuccess = ref(false);

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const animateLoading = async () => {
  isLoading.value = true;

  await wait(props.delay);

  isLoading.value = false;

  toast({
    title: "Success",
    variant: "default",
  });
};

const animateSuccess = async () => {
  isSuccess.value = true;

  await wait(props.delay);

  isSuccess.value = false;
};

const handleClick = async (event: MouseEvent) => {
  await animateLoading();
  await emit("click", event);
  await animateSuccess();
};
</script>

<template>
  <button
    ref="scope"
    @click="handleClick"
    :class="[
      'bg-olive/70 flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-green-500/50 dark:ring-offset-black',
      props.class,
    ]"
  >
    <div class="flex items-center gap-2">
      <Loader2Icon v-if="isLoading" class="animate-spin" />
      <CheckIcon v-else-if="isSuccess" class="animate-in" />
      <span><slot v-if="!isLoading && !isSuccess" /></span>
    </div>
  </button>
</template>

<!-- Loader Component -->
<script lang="ts">
export default {};
</script>
