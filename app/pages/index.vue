<template>
  <div class="p-10 bg-background">
    <h1 class="font-bold text-2xl mb-10">SRM system by RED GROUP</h1>
    <div v-if="isLoading">...loading</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div v-for="(column, index) in data" :key="column.id">
          <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
            {{ column.name }}
          </div>
          <KanbanCreateDeal :refetch="refetch" :status="column.id"/>
          <VCard v-for="card in column.items" class="mb-3" draggable="true">
            <VCardHeader role="button">
              {{ card.name }}
            </VCardHeader>
            <VCardDescription>
              {{ convertCurrency(card.price) }}
            </VCardDescription>
            <VCardContent>
              <div> Компания</div>
              {{ card.companyName }}
            </VCardContent>
            <VCardFooter>
              {{ dayjs(card.$createdAt).format('DD MMMM YYYY') }}
            </VCardFooter>
          </VCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import type {ICard, IColumn} from "~/components/kanban/kanban.types";
import {useKanbanQuery} from "~/components/kanban/useKanbanQuery";
import dayjs from "dayjs";

useSeoMeta({
  title: 'HOME | CRM'
})

const {data, isLoading, refetch} = useKanbanQuery()

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)

</script>

<style scoped>

</style>
