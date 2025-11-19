<template>
  <section class="grid">
    <slot/>
    <div>
      <NuxtWelcome/>
    </div>
  </section>
</template>

<script lang="ts" setup>

import Sidebar from "~/components/layout/Sidebar.vue";
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
  min-height: 100vh;
}
</style>
