<script setup lang="ts">
import { useFetchCocktail } from "@/api";
import { computed } from "vue";
import { useRoute } from "vue-router";
import DrinkIngredients from "./DrinkIngredients.vue";
import DrinkInstructions from "./DrinkInstructions.vue";
import DrinkMainInfo from "./DrinkMainInfo.vue";
import DrinkDetailsSkeleton from "./DrinkDetailsSkeleton.vue";
import { Button } from "@/components/ui/button";
import { SidebarClose, SidebarOpen } from "lucide-vue-next";
import { useSidebarStore } from "@/lib/store";

const route = useRoute();
const slug = computed(() => route.params.cocktailSlug as string);
const { data, isFetching } = useFetchCocktail(slug);
const sidebar = useSidebarStore();
</script>

<template>
  <div class="flex-1 px-6 py-4 overflow-auto">
    <div v-if="isFetching">
      <DrinkDetailsSkeleton />
    </div>

    <div v-else-if="data" class="flex flex-col gap-4">
      <Button
        variant="outline"
        size="icon"
        class="sm:hidden"
        @click="sidebar.toggle"
      >
        <SidebarClose v-if="sidebar.isOpen" class="w-6 h-6" />
        <SidebarOpen v-else class="w-6 h-6" />
      </Button>

      <DrinkMainInfo :cocktail="data" />
      <DrinkInstructions :cocktail="data" />
      <DrinkIngredients :cocktail="data" />
    </div>
  </div>
</template>
