<script setup lang="ts">
import DrinkDetails from "@/components/features/drinks/DrinkDetails.vue";
import DrinkMenu from "@/components/features/drinks/DrinkMenu.vue";
import Sidebar from "@/components/ui/Sidebar.vue";
</script>

<template>
  <div class="flex w-svw h-svh bg-slate-400">
    <Sidebar><DrinkMenu /></Sidebar>
    <DrinkDetails />
  </div>
</template>
