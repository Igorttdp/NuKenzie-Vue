<script setup lang="ts">
import { provide, ref } from 'vue'
import type { IDataViewProps } from '@/typings/interfaces'
import { dataInjectionKey } from './keys'

const data = ref<Array<IDataViewProps>>([])
const updateData = (newData: IDataViewProps) => data.value.push({ ...newData })
const deleteItem = (id: number) => data.value.splice(id, 1)

provide(dataInjectionKey, {
  data,
  updateData,
  deleteItem
})
</script>

<template>
  <slot />
</template>
