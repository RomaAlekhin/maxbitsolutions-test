<script setup lang="ts">
import { routesInfo } from "@/lib/router";
import { CocktailSlug, Link } from "./types";
import { labelByCocktailSlug } from "./utils";

const links = [
  CocktailSlug.MARGARITA,
  CocktailSlug.MOJITO,
  CocktailSlug.A1,
  CocktailSlug.KIR,
].map<Link>((key) => ({
  to: routesInfo.cocktailDetails.getLinkTo(key),
  label: labelByCocktailSlug[key],
}));
</script>

<template>
  <nav class="flex flex-col">
    <RouterLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="py-3 px-4 transition-colors hover:bg-foreground/20"
    >
      {{ link.label }}
    </RouterLink>
  </nav>
</template>
