<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">
      Наши клиенты
    </h1>
    <div v-if="isLoading">Loading...</div>
    <VTable v-else>

      <VTableHeader>
        <VTableRow>
          <VTableHead class="w-[80px] text-center">Изображение</VTableHead>
          <VTableHead class="w-[300px]">Наименование</VTableHead>
          <VTableHead class="w-[300px]">Email</VTableHead>
          <VTableHead>Откуда пришёл</VTableHead>
        </VTableRow>
      </VTableHeader>

      <VTableBody>
        <VTableRow
            v-for="customer in customers"
            :key="customer.$id">
          <VTableCell>
            <NuxtLink :href='`/customers/edit/${customer.$id}`'>
              <NuxtImg
                  :src="customer.avatar_url"
                  :alt="customer.name"
                  width="50"
                  height="50"
                  class="rounded-full mx-auto"
              />
            </NuxtLink>
          </VTableCell>
          <VTableCell
              class="font-medium">
            {{ customer.name }}
          </VTableCell>
          <VTableCell>
            {{ customer.email }}
          </VTableCell>
          <VTableCell>
            {{ customer?.from_source }}
          </VTableCell>
        </VTableRow>
      </VTableBody>

    </VTable>
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
