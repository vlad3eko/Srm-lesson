<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <p :class="cn('text-sm text-muted-foreground p-6 pt-2', props.class)">
    <slot />
  </p>
</template>
