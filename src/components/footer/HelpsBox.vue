<script setup lang="ts">
import { BoxIcon, TruckIcon, HeadsetIcon } from "lucide-vue-next";
</script>

<template>
  <div
    class="mt-6 grid grid-cols-1 place-content-center gap-4 px-10 py-2 md:grid-cols-2 md:px-12 lg:grid-cols-3"
  >
    <div class="flex flex-row items-center justify-center gap-4 md:gap-6">
      <div class="flex flex-col items-center rounded-full bg-gray-100 p-2">
        <BoxIcon class="size-10" />
      </div>

      <div class="flex flex-col items-start">
        <h3 class="text-xl font-medium">Free Shipping</h3>
        <p class="text-sm text-gray-500">
          Free shipping on all orders over $100
        </p>
      </div>
    </div>

    <div class="flex flex-1 shrink flex-row items-center justify-center gap-2">
      <div class="flex flex-col items-center rounded-full bg-gray-100 p-2">
        <BoxIcon class="size-10" />
      </div>
      <div class="flex flex-col items-start">
        <h3 class="text-xl font-medium">Flexible Payment</h3>
        <p class="text-sm text-gray-500">Multiple secure payment options</p>
      </div>
    </div>

    <div class="flex flex-row items-center justify-center gap-2">
      <div class="flex flex-col items-center rounded-full bg-gray-100 p-2">
        <BoxIcon class="size-10" />
      </div>

      <div class="flex flex-col items-start">
        <h3 class="text-xl font-medium">24/7 Support</h3>
        <p class="text-sm text-gray-500">We support online all days</p>
      </div>
    </div>
  </div>
</template>
