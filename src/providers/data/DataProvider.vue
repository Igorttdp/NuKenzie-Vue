<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import type { IDataViewProps } from '@/typings/interfaces'
import { dataInjectionKey } from './keys'

const data = ref<Array<IDataViewProps>>([])
const updateData = (newData: IDataViewProps) => data.value.push({ ...newData })
const deleteItem = (id: number) => data.value.splice(id, 1)

const total = computed(() =>
  data.value.reduce((acc, cv) => {
    if (cv.type === 1) {
      return acc - (cv.value ?? 0)
    }

    return acc + (cv.value ?? 0)
  }, 0)
)

provide(dataInjectionKey, {
  data,
  updateData,
  deleteItem,
  total
})
</script>

<template>
  <slot />
</template>
