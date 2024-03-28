<script setup lang="ts">
import { Home } from "lucide-vue-next";

import { Button } from "@/components/ui/button";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="w-screen flex flex-col gap-6 items-center justify-center p-10">
    <h1>Sorry, this page doesn't exist</h1>

    <RouterLink to="/">
      <Button variant="default">
        <Home class="w-6 h-6 mr-3" />
        <span>Back to home page</span>
      </Button>
    </RouterLink>
  </div>
</template>
