<script setup lang="ts">
import DrinkDetails from "@/components/features/drinks/DrinkDetails";
import DrinkMenu from "@/components/features/drinks/DrinkMenu.vue";
import Sidebar from "@/components/ui/Sidebar.vue";
</script>

<template>
  <div class="flex w-screen h-dvh overflow-hidden">
    <Sidebar>
      <DrinkMenu />
    </Sidebar>
    <DrinkDetails />
  </div>
</template>
