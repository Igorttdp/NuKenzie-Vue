<script setup lang="ts">
import NuNavbar from '@/components/NuNavbar.vue'
import DataViewSubmitForm from '@/components/DataViewSubmitForm.vue'
import DataView from '@/components/DataView.vue'
import DataProvider from '@/providers/data/DataProvider.vue'
import TotalSummary from '@/components/TotalSummary.vue';
</script>

<template>
  <NuNavbar />
  <main>
    <DataProvider>
      <div>
        <DataViewSubmitForm />
        <TotalSummary />
      </div>

      <DataView />
    </DataProvider>
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
