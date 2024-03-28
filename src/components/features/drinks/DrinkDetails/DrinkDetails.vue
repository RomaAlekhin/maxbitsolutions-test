<script setup lang="ts">
import { useFetchCocktail } from "@/api";
import { computed } from "vue";
import { useRoute } from "vue-router";
import DrinkIngredients from "./DrinkIngredients.vue";
import DrinkInstructions from "./DrinkInstructions.vue";
import DrinkMainInfo from "./DrinkMainInfo.vue";
import DrinkDetailsSkeleton from "./DrinkDetailsSkeleton.vue";

const route = useRoute();
const slug = computed(() => route.params.cocktailSlug as string);
const { data, isFetching } = useFetchCocktail(slug);
</script>

<template>
  <div class="flex-1 px-6 py-4 overflow-auto">
    <div v-if="isFetching">
      <DrinkDetailsSkeleton />
    </div>

    <div v-else-if="data" class="flex flex-col gap-4">
      <DrinkMainInfo :cocktail="data" />
      <DrinkInstructions :cocktail="data" />
      <DrinkIngredients :cocktail="data" />
    </div>
  </div>
</template>
