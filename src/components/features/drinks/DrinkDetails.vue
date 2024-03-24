<script setup lang="ts">
import { useFetchCocktail } from "@/api";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const slug = computed(() => route.params.cocktailSlug as string);
const { data, isFetching } = useFetchCocktail(slug);
</script>

<template>
  <div class="bg-amber-400 flex-1">
    <div><strong>Current route path:</strong> {{ $route.fullPath }}</div>
    <div><strong>slug:</strong> {{ slug }}</div>

    <div v-if="isFetching">loading...</div>
    <pre v-else-if="data">{{ data }}</pre>
  </div>
</template>
