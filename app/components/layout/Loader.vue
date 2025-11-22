<template>
  <div class="wrapper">
    <NuxtImg src="/loader.svg" alt="loading" class="max-w-[200px]"/>
  </div>
</template>

<script setup>

</script>

<style scoped>
@reference "tailwindcss";

.wrapper {
  @apply flex items-center justify-center w-screen h-screen
}
</style>
