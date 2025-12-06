<script lang="ts" setup>

import {useComments} from "~/components/kanban/slideover/useComments";
import {useCommentCreate} from "~/components/kanban/slideover/useCommentCreate";
import type {IDeal} from "~/types/deals.types";
import dayjs from "dayjs";

const {data, refetch, isLoading} = useComments()
const {commentRef, writeComment} = useCommentCreate({refetch})

const deal = data as unknown as IDeal

</script>

<template>
  <VInput placeholder="Оставьте комментарий" v-model="commentRef" @keyup.enter="writeComment()"/>

  <VSkeleton v-if="isLoading" class="w-full h-[76px] rounded mt-5"/>

  <div v-else class="flex flex-col-reverse">
    <div
        v-for="comment in deal?.comments"
        :key="comment.$id"
        class="flex items-start mt-5"
    >
      <Icon name="radix-icons:chat-bubble" class="mr-3 mt-1" size="25"/>
      <div class="border-border bg-black/20 rounded p-3 w-full">
        <div class="mb-2 text-sm">
          Комментарий {{ dayjs(comment.$createdAt).format('HH:mm') }}
        </div>
        {{ comment.text }}
      </div>
    </div>
  </div>
</template>
