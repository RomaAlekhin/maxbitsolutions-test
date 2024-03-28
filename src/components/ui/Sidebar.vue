<script setup lang="ts">
import { useSidebarStore } from "@/lib/store";
import { Button } from "./button";
import { X } from "lucide-vue-next";

const sidebar = useSidebarStore();
</script>

<template>
  <div
    class="transition-transform bg-background h-full absolute left-0 top-0 -translate-x-full min-w-full flex sm:translate-x-0 sm:relative sm:min-w-40"
    :class="sidebar.isOpen ? ' translate-x-0' : ''"
  >
    <div class="flex-1 border-r" @click="sidebar.toggle">
      <slot></slot>
    </div>

    <div class="px-6 py-4 sm:hidden" @click="sidebar.toggle">
      <Button variant="ghost" size="icon">
        <X class="w-6 h-6" />
      </Button>
    </div>
  </div>
</template>
