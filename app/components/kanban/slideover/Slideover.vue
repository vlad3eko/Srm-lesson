<script lang="ts" setup>
import {useDealSlideStore} from '~/store/deal-slide.store'

const store = useDealSlideStore()

const isLocalOpen = computed({
  get: () => store.isOpen,
  set: value => {
    store.isOpen = value
  },
})
</script>

<template>
    <div>

      <USlideover v-model="isLocalOpen">

        <div>
          <slot/>
        </div>

        <template #title>
          <div class="uppercase bold text-xl">О сделке</div>
        </template>
        <template #description>
          <span>Информация о сделке</span>
        </template>
        <template #body>
          <KanbanSlideoverTop/>
          <KanbanSlideoverComments/>
        </template>
      </USlideover>
    </div>
</template>
