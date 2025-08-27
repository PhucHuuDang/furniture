

<template>


<Sheet>

  <SheetTrigger as-child>

    <div
    class="hover:bg-focus-color cursor-pointer rounded-full bg-slate-200/50 p-4 transition duration-200 hover:scale-105"
    >
    <ShoppingBagIcon class="size-6" />
  </div>

  <SheetContent>
    <SheetHeader>
      <SheetTitle>Shopping Bag</SheetTitle>
      <SheetDescription>
        <div class="flex flex-col gap-2">
          <div class="flex justify-between">
            <span>
              Wish you a happy shopping!
            </span>
          </div>
        </div>
      </SheetDescription> 
    </SheetHeader>
  </SheetContent>
</SheetTrigger>
</Sheet>
</template>

<script setup lang="ts">

import { ShoppingBagIcon } from "lucide-vue-next";
import { Sheet, SheetTrigger, SheetHeader, SheetTitle, SheetDescription,SheetContent } from "../ui/sheet"

</script>
