<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Skeleton } from "./skeleton";

defineProps<{
  src: string;
  alt: string;
  width: string;
  height: string;
}>();

const isLoading = ref(true);
const image = ref();

onMounted(async () => {
  if (!image.value) return;

  image.value.onload = () => {
    isLoading.value = false;
  };
});
</script>

<template>
  <Skeleton
    v-show="isLoading"
    class="rounded-xl"
    :class="`w-[${width}px] h-[${height}px]`"
  />

  <img
    class="rounded-xl"
    ref="image"
    loading="lazy"
    :width="isLoading ? 0 : width"
    :height="isLoading ? 0 : height"
    :key="src"
    :src="src"
    :alt="alt"
  />
</template>
