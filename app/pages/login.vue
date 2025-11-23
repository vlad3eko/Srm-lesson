<template>
  <div class="flex justify-center items-center min-h-screen w-full">
    <div class="rounded border p-5 bg-secondary">
      <h1>Login</h1>
      <p v-if="errorMessage" class="text-red-500 font-bold">Ошибка входа: {{errorMessage}}</p>
      <form class="mt-3">
        <VInput v-model="emailRef" type="email" placeholder="Email" class="mb-3"/>
        <VInput v-model="passwordRef" type="password" placeholder="Password" class="mb-3"/>
        <VInput v-model="nameRef" type="name" placeholder="Name" class="mb-3"/>
        <div class="flex items-center justify-center gap-5">
          <VButton @click.prevent="login" variant="outline" type="button">Войти</VButton>
          <VButton @click.prevent="register" variant="outline" type="button">Регистрация</VButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {useIsLoadingStore, userAuthStore} from "~/store/auth.store";
import {v4 as uuid} from 'uuid'

useHead({
  title: 'login | SRM System'
})

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')
const errorMessage = ref('')


const isLoadingStore = useIsLoadingStore()
const authStore = userAuthStore()
const router = useRouter()

// LOGIN
const login = async () => {
  try {
    isLoadingStore.set(true)

    await account.createEmailPasswordSession({
      email: emailRef.value,
      password: passwordRef.value,
    })

    const response = await account.get()

    if (!response) {
      throw Error('Ошибка входа')
    }

    authStore.set({
      email: response.email,
      name: response.name,
      status: true,
    })

    emailRef.value = ''
    passwordRef.value = ''
    nameRef.value = ''

    await router.push('/')
  } catch (error: any) {
    errorMessage.value = error.message
    isLoadingStore.set(false)
  } finally {
    isLoadingStore.set(false)
  }
}


// REGISTER
const register = async () => {
  await account.create({
    userId: uuid(),
    email: emailRef.value,
    password: passwordRef.value,
    name: nameRef.value,
  })
  await login()
}


</script>

<style scoped>

</style>
