<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="logo" width="150px" class="mx-auto"/>
    </NuxtLink>
    <button class="absolute top-2 right-3 transition-colors hover:text-primary cursor-pointer">
    <Icon name="line-md:logout" size="20"/>
    </button>
    <LayoutMenu/>
  </aside>
</template>

<script setup>

</script>

<style scoped>

</style>
