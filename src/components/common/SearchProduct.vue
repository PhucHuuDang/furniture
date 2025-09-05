<script setup lang="ts">
import { ref, watch } from "vue";
import { HaloSearch } from "../ui/halo-search";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogScrollContent,
} from "../ui/dialog";
import { DialogTrigger } from "reka-ui";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { useMagicKeys } from "@vueuse/core";
import { IInput } from "../ui/IInput";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-vue-next";

const isOpen = ref<boolean>(false);

const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
    }
  },
});

watch([Meta_K, Ctrl_K], ([metaK, ctrlK]) => {
  if (metaK || ctrlK) {
    handleOpenChange();
  }
});

const handleOpenChange = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <Input
    class="placeholder:text-olive focus:ring-olive hover:bg-focus-color max-w-md cursor-pointer bg-slate-200/50 bg-gradient-to-r p-1 pl-2 transition duration-300 [animation-duration:_6s] placeholder:text-[11px] focus:ring-1"
    placeholder="Search for a product..."
    @click="handleOpenChange"
  >
    <template #suffix>
      <kbd
        class="bg-muted text-muted-foreground absolute top-2 right-2 inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none"
      >
        <span class="text-xs">⌘</span>K
      </kbd>
    </template>
  </Input>

  <CommandDialog v-model:open="isOpen">
    <Command>
      <CommandInput auto-focus aria-placeholder="Search for a product..." />
      <CommandList>
        <CommandEmpty> No results found. </CommandEmpty>

        <CommandGroup title="Products">
          <CommandItem value="Chairman"> Chairman </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </CommandDialog>
</template>
