import { useFetch } from "@/composables";
import { Ref, computed, toValue } from "vue";
import { API_CONFIG } from "./config";
import { Cocktail } from "./types";

const getUrl = (slug: string): string => {
  return `${API_CONFIG.theCocktailDBSearchUrl}${slug}`;
};

export const useFetchCocktail = (slug: Ref<string>) => {
  const url = computed(() => getUrl(toValue(slug)));
  return useFetch<Cocktail>(url);
};
