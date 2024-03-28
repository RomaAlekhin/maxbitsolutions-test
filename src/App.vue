<script setup lang="ts">
import { RouterView } from "vue-router";
import { useDark } from "./composables";

useDark();
</script>

<template>
  <RouterView />
</template>
