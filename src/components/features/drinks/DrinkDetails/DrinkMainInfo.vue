<script setup lang="ts">
import { Cocktail } from "@/api/types";

defineProps<{ cocktail: Cocktail }>();
</script>

<template>
  <div class="flex justify-between flex-col gap-6 sm:flex-row">
    <div class="flex flex-col gap-6">
      <h1 class="text-3xl font-bold">{{ cocktail.strDrink }}</h1>

      <ul>
        <li>{{ cocktail.strCategory }}</li>
        <li>{{ cocktail.strAlcoholic }}</li>
        <li>{{ cocktail.strGlass }}</li>
      </ul>
    </div>

    <div>
      <img
        class="rounded-xl"
        :key="cocktail.strDrinkThumb"
        width="200"
        loading="lazy"
        :src="cocktail.strDrinkThumb"
        :alt="cocktail.strDrink"
      />
    </div>
  </div>
</template>
