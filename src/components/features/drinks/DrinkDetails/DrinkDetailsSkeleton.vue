<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between gap-6">
      <div class="flex flex-col gap-6 flex-1">
        <Skeleton class="h-10" />

        <Skeleton class="h-4 w-3/4" />
        <Skeleton class="h-4 w-3/4" />
        <Skeleton class="h-4 w-3/4" />
      </div>

      <Skeleton class="h-[125px] w-[200px] rounded-xl" />
    </div>

    <div>
      <Skeleton class="h-6 w-3/4 my-4" />
      <Skeleton class="h-4 w-1/2 my-2" />
    </div>

    <div>
      <Skeleton class="h-6 w-3/4 my-4" />

      <div class="flex gap-6">
        <Skeleton class="h-4 w-1/2 my-2" />
        <Skeleton class="h-4 w-1/2 my-2" />
      </div>

      <div class="flex gap-6">
        <Skeleton class="h-4 w-1/2 my-2" />
        <Skeleton class="h-4 w-1/2 my-2" />
      </div>
    </div>
  </div>
</template>
