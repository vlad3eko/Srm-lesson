<template>
  <div class="p-10 bg-background">
    <h1 class="font-bold text-2xl mb-10">SRM system by RED GROUP</h1>
    <VCard class="mb-3" draggable="true">
      <VCardHeader role="button">name card</VCardHeader>
      <VCardContent>content card</VCardContent>
      <VCardFooter>footer card</VCardFooter>
    </VCard>
  </div>
</template>

<script lang="ts" setup>

import type {ICard, IColumn} from "~/components/kanban/kanban.types";

useSeoMeta({
  title: 'HOME | CRM'
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)

</script>

<style scoped>

</style>
