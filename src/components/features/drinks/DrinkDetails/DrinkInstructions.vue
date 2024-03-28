<script setup lang="ts">
import { Cocktail } from "@/api/types";

defineProps<{ cocktail: Cocktail }>();
</script>

<template>
  <div>
    <h3 class="text-lg font-bold">Instructions:</h3>

    <div>{{ cocktail.strInstructions }}</div>
  </div>
</template>
