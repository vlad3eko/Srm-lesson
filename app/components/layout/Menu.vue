<template>
  <div>
    <NuxtLink
        v-for="item in MENU_DATA"
        :key="item.name"
        :to="item.url"
        class="flex items-center py-1 px-3 gap-2 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2.5 cursor-pointer">
        <Icon :name="item.icon"/>
      <span>{{item.name}}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import {MENU_DATA} from './menu.data'
</script>

<style scoped>

</style>
