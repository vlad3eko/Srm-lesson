<template>
  <div class="text-center mb-2">
    <button
        @click="isOpenForm = !isOpenForm"
        class="transition-all opacity-15 hover:opacity-100 hover:text-[#a352c8]"
    >
      <Icon
          :name="isOpenForm ? 'radix-icons:arrow-up' : 'radix-icons:plus-circled'"
          class="fade-in-100 fade-out-0 cursor-pointer"
          size="35"
      />

    </button>
    <form v-if="isOpenForm" @submit="onSubmit" class="form">
      <VInput
        placeholder="Наименование"
        v-model="name"
        v-bind="nameAttrs"
        type="text"
        class="input mb-2"
      />
      <VInput
          placeholder="Стоимость"
          v-model="price"
          v-bind="priceAttrs"
          type="text"
          class="input mb-2"
      />
      <VInput
          placeholder="Email"
          v-model="customerEmail"
          v-bind="customerEmailAttrs"
          type="text"
          class="input mb-2"
      />
      <VInput
          placeholder="Компания"
          v-model="customerName"
          v-bind="customerNameAttrs"
          type="text"
          class="input"
      />

      <button class="btn mt-2" :disabled="isPending">
        {{ isPending ? 'Загрузка...' : 'Добавить' }}
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import {v4 as uuid} from 'uuid'
import {COLLECTION_DEALS, DB_ID} from '@/utils/app.constants'
import type {IDeal} from "@/types/deals.types";
import {useMutation} from "@tanstack/vue-query";

const isOpenForm = ref<boolean>(false)

interface IDealFormState extends Pick<IDeal, 'name' | 'price'> {
  customer: {
    email: string,
    name: string,
  }
  status: string
}

const props = defineProps({
  status: {
    type: String,
    default: '',
  }, refetch: {
    type: Function
  }
})

const {handleSubmit, defineField, handleReset} = useForm<IDealFormState>({
  initialValues: {
    status: props.status
  }
})

const [name, nameAttrs] = defineField('name')
const [price, priceAttrs] = defineField('price')
const [customerEmail, customerEmailAttrs] = defineField('customer.email')
const [customerName, customerNameAttrs] = defineField('customer.name')

const {mutate, isPending} = useMutation({
  mutationKey: ['create a new deal'],
  mutationFn: (data: IDealFormState) => DB.createDocument(DB_ID, COLLECTION_DEALS, uuid(), data),
  onSuccess() {
    props.refetch && props.refetch()
    handleReset()
  }
})

const onSubmit = handleSubmit(values => {
  mutate(values)
})

</script>

<style scoped>
@reference "@/assets/css/main.css"

.input {
  @apply border-[#161c26] placeholder:text-[#748092] focus:border-border transition-colors
}

.btn {
  @apply text-xs border py-1 px-2 rounded border-[#161c26] hover:border-[#482c65] transition-colors text-[#aebed5] hover:text-white
}

.form {
  @apply mb-3 block;
  animation: show 0.3s ease-in-out;
}

@keyframes show {
  from {
    border: #a352c83d;
    transform: translateY(-35px);
    opacity: 0.3;
  }

  90% {
    border: #a352c83d;
  }

  to {
    border: transparent;
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
