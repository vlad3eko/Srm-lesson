<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">
      Редактирование {{ (data as unknown as ICustomerFromState)?.name }}
    </h1>

    <form @submit="onSubmit" class="form">
      <VInput
          placeholder="Наименование"
          v-model="name"
          v-bind="nameAttrs"
          type="text"
          class="input mb-2"
      />
      <VInput
          placeholder="Email"
          v-model="email"
          v-bind="emailAttrs"
          type="text"
          class="input mb-2"
      />
      <VInput
          placeholder="Откуда пришёл?"
          v-model="fromSource"
          v-bind="fromSourceAttrs"
          type="text"
          class="input mb-2"
      />

      <img
          v-if="values.avatar_url || isUploadImagePending"
          :src="values.avatar_url"
          alt=""
          width="50"
          height="50"
          class="rounded-full my-2"
      />

      <div class="grid w-full max-w-sm items-center gap-1.5 input">
        <label>
          <div class="text-sm mb-2">
            <VInput
                type="file"
                :onchange="(e:InputFileEvent) => e?.target?.files?.length && uploadImage(e.target.files[0])"
                :disabled="isUploadImagePending"
            />
          </div>
        </label>
      </div>

      <VButton :disabled="isPending" variant="secondary" class="mt-3">
        {{ isPending ? 'Загрузка..' : 'Сохранить' }}
      </VButton>

    </form>

  </div>
</template>

<script lang="ts" setup>

import type {ICustomer} from "~/types/deals.types";
import {useMutation, useQuery} from "@tanstack/vue-query";
import {v4 as uuid} from 'uuid'


interface InputFileEvent extends Event {
  target: HTMLInputElement
}

interface ICustomerFromState
    extends Pick<ICustomer, 'avatar_url' | 'email' | 'name' | 'from_source'> {
}

useSeoMeta({
  title: 'Редактировании компании'
})

const router = useRoute()
const customerId = router.params.id as string

const {handleSubmit, defineField, setFieldValue, setValues, values} = useForm<ICustomerFromState>()

const {data, isSuccess} = useQuery({
  queryKey: ['get customer', customerId],
  queryFn: () => DB.getDocument(DB_ID, COLLECTION_CUSTOMERS, customerId),
})

console.log('data', data)

watch(isSuccess, () => {
  const initialData = data.value as unknown as ICustomerFromState
  setValues({
    avatar_url: initialData.avatar_url,
    email: initialData.email,
    name: initialData.name,
    from_source: initialData.from_source || ''
  })
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [fromSource, fromSourceAttrs] = defineField('from_source')

const {mutate, isPending} = useMutation({
  mutationKey: ['update customer', customerId],
  mutationFn: (data: ICustomerFromState) => DB.updateDocument(DB_ID, COLLECTION_CUSTOMERS, customerId, data)
})

const onSubmit = handleSubmit(values => {
  mutate(values)
})

const {mutate: uploadImage, isPending: isUploadImagePending} = useMutation({
  mutationKey: ['upload image'],
  mutationFn: (file: File) => storage.createFile(STORAGE_ID, uuid(), file),
  onSuccess(data) {
    const response = storage.getFileDownload(STORAGE_ID, data.$id)
    console.log('response', response)
    setFieldValue('avatar_url', response)
  }
})

</script>

<style scoped>
@reference "@/assets/css/main.css"

.input {
  @apply border-[#161c26] mb-2 placeholder:text-[#748092] focus:border transition-colors
}
</style>
