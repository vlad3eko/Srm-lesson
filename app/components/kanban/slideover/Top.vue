<script setup lang="ts">
import dayjs from 'dayjs'
import { useDealSlideStore } from '~/store/deal-slide.store'

const store = useDealSlideStore()
</script>

<template>
	<div class="bg-black/20 rounded p-3 border border-black mb-2">
		<KanbanSlideoverLabel label-text="Наименование">
			<h2>
				{{ store.card?.name }}
			</h2>
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Сумма">
			{{ convertCurrency(store.card?.price || 0) }}
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Статус">
			<UBadge variant="outline">
				{{ store.card?.status }}
			</UBadge>
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Клиент">
			{{ store.card?.companyName }}
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Дата создания">
			{{ dayjs(store.card?.$createdAt).format('DD MMMM YYYY') }}
		</KanbanSlideoverLabel>
	</div>
</template>
