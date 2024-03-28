<script setup lang="ts">
import { Cocktail } from "@/api/types";
import Image from "@/components/ui/Image.vue";

defineProps<{ cocktail: Cocktail }>();
</script>

<template>
  <div class="flex justify-between gap-6">
    <div class="flex flex-1 flex-col gap-6">
      <h1 class="text-3xl font-bold">{{ cocktail.strDrink }}</h1>

      <ul>
        <li>{{ cocktail.strCategory }}</li>
        <li>{{ cocktail.strAlcoholic }}</li>
        <li>{{ cocktail.strGlass }}</li>
      </ul>
    </div>

    <div class="flex justify-end flex-1">
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
