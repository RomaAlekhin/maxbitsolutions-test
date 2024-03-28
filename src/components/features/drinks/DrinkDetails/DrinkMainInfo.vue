<script setup lang="ts">
import { Cocktail } from "@/api/types";
import Image from "@/components/ui/Image.vue";

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
      <Image
        width="200"
        height="200"
        :key="cocktail.strDrinkThumb"
        :src="cocktail.strDrinkThumb"
        :alt="cocktail.strDrink"
      />
    </div>
  </div>
</template>
