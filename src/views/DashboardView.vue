<script setup lang="ts">
import NuNavbar from '@/components/NuNavbar.vue'
import DataViewSubmitForm from '@/components/DataViewSubmitForm.vue'
import DataView from '@/components/DataView.vue'
import type { IDataViewItemProps } from '@/typings/interfaces'
import { ref } from 'vue'

const dataArray = ref<Array<IDataViewItemProps>>([])
const updateData = (data: IDataViewItemProps) => dataArray.value.push({ ...data });
const deleteItem = (id: number) => dataArray.value.splice(id, 1);
</script>

<template>
  <NuNavbar />
  <main>
    <DataViewSubmitForm @save="updateData" />
    <DataView @delete-item="deleteItem" :data-array="dataArray" />
  </main>
</template>

<style scoped lang="scss">
main {
  min-height: calc(100vh - 103px - 4rem);
  max-width: 1200px;
  width: 100%;
  margin: 4rem auto 0;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 2rem;
}
</style>
