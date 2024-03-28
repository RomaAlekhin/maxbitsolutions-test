import { createPinia, defineStore } from "pinia";

export const store = createPinia();

export const useCacheStore = defineStore("cache", {
  state: () => ({
    cache: {} as Record<string, unknown>,
  }),
  actions: {
    setCache(url: string, cocktail: unknown) {
      this.cache[url] = cocktail;
    },
  },
  getters: {
    getCacheByUrl: (state) => {
      return (url: string) => state.cache[url];
    },
  },
});

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    isOpen: false as boolean,
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
