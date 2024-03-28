<script setup lang="ts">
import { Cocktail } from "@/api/types";
import { computed } from "vue";

const props = defineProps<{ cocktail: Cocktail }>();

const ingredientList = computed(() => {
  if (!props.cocktail) return [];

  return Array(15)
    .fill(null)
    .map((_, index) => ({
      ingredient: props.cocktail[`strIngredient${index + 1}`] ?? "",
      measure: props.cocktail[`strMeasure${index + 1}`] ?? "as you wish",
    }))
    .filter((item) => Boolean(item.ingredient));
});
</script>

<template>
  <div>
    <h3 class="text-lg font-bold">List of ingredients:</h3>

    <ul>
      <li
        v-for="{ ingredient, measure } in ingredientList"
        :key="ingredient"
        class="flex justify-between"
      >
        <span>{{ ingredient }}</span>
        <span>{{ measure }}</span>
      </li>
    </ul>
  </div>
</template>
