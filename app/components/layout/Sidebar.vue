<template>
  <aside class="px-5 py-8 bg-secondary h-full relative w-full border-r">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="logo" width="150px" class="mx-auto"/>
    </NuxtLink>
    <button @click.prevent="logout" class="absolute top-2 right-3 transition-colors hover:text-primary cursor-pointer">
    <Icon name="line-md:logout" size="20"/>
    </button>
    <LayoutMenu/>
    <span>
    </span>
  </aside>
</template>

<script lang="ts" setup>

import {useIsLoadingStore, userAuthStore} from "~/store/auth.store";


const isLoadingStore = useIsLoadingStore()
const store = userAuthStore()
const router = useRouter()

const logout = async () => {
  try {
    isLoadingStore.set(true)
    await account.deleteSession({
      sessionId: 'current'
    })
    store.clear()
    await router.push('/login')
  } catch (e: any) {
    console.log('e', e.message)
  } finally {
    isLoadingStore.set(false)
  }
}

</script>

<style scoped>

</style>
