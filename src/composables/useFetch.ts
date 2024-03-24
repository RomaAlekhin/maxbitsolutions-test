import { Ref, ref, toValue, watch } from "vue";

export const useFetch = <Data>(url: Ref<string>) => {
  const isFetching = ref(false);
  const isError = ref(false);

  const data = ref<Data>();

  watch(url, (value) => fetchData(toValue(value)), { immediate: true });

  async function fetchData(url: string) {
    isFetching.value = true;

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        data.value = responseJson.drinks[0];
        isFetching.value = false;
      })
      .catch(() => {
        isError.value = true;
        isFetching.value = false;
      });
  }

  return { isFetching, isError, data };
};
