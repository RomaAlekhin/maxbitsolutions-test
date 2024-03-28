import { useCacheStore } from "@/lib/store";
import { Ref, ref, toValue, watch } from "vue";

export const useFetch = <Data>(url: Ref<string>) => {
  const isFetching = ref(false);
  const isError = ref(false);

  const data = ref<Data>();

  const cacheStore = useCacheStore();

  watch(url, (value) => fetchData(toValue(value)), { immediate: true });

  async function fetchData(url: string) {
    isFetching.value = true;

    const existCache = cacheStore.getCacheByUrl(url);
    if (existCache) {
      isFetching.value = false;
      data.value = existCache as Data;
      return;
    }

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        const value = responseJson.drinks[0];

        data.value = value;
        cacheStore.setCache(url, value);
        isFetching.value = false;
      })
      .catch(() => {
        isError.value = true;
        isFetching.value = false;
      });
  }

  return { isFetching, isError, data };
};
