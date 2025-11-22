<template>
  <section :class="{grid: store.isAuth}">
    <LayoutLoader v-if="isLoadingStore.isLoading"/>
    <LayoutSidebar v-if="store.isAuth"/>
    <div>
      <slot/>
    </div>
  </section>
</template>

<script lang="ts" setup>

import {account} from "~/utils/appwrite";
import {userAuthStore, useIsLoadingStore} from "~/store/auth.store";

const isLoadingStore = useIsLoadingStore()
const store = userAuthStore()
const router = useRouter()

onMounted(async () => {
  try {
    const user = await account.get()
    if (user) {
      store.set(user)
    }
  } catch (error) {
    console.log('Component Default, not auth')
    return router.push('/login')
  } finally {
    isLoadingStore.set(false)
  }
})

console.log('auth', store.isAuth)

</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
  min-height: 100vh;
}

</style>
