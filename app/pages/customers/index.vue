<template>
  <div class="p-10">
  <h1 class="font-bold text-2xl mb-10">
    Наши клиенты
  </h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {useQuery} from "@tanstack/vue-query";
import type {ICustomer} from "~/types/deals.types";

useSeoMeta({
  title: 'Customers | CRM System'
})

const {data, isLoading} = useQuery({
  queryKey: ['customers'],
  queryFn: () => DB.listDocuments(DB_ID, COLLECTION_CUSTOMERS)
})

const customers = (data?.value?.documents as unknown as ICustomer[])
</script>

<style scoped>

</style>
