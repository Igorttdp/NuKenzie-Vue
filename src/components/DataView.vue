<script setup lang="ts">
import { dataInjectionKey } from '@/providers/data/keys'
import DataViewItem from './DataViewItem.vue'
import { inject } from 'vue'
import type { IDataProviderProps } from '@/typings/interfaces'

const { data } = inject(dataInjectionKey) as IDataProviderProps
</script>

<template>
  <div class="finance-summary">
    <div>
      <h5>Resumo Financeiro</h5>
    </div>
    <div class="wrapper">
      <template v-if="!data.length">
        <h3>Você ainda não possui nenhum lançamento</h3>
        <ul :class="{ empty: true }">
          <li><img src="../assets/emptyCard.svg" alt="" /></li>
          <li><img src="../assets/emptyCard.svg" alt="" /></li>
          <li><img src="../assets/emptyCard.svg" alt="" /></li>
        </ul>
      </template>
      <ul v-else>
        <DataViewItem
          :key="[data.description, '-', index].join()"
          v-for="(data, index) in data"
          :description="data.description"
          :type="data.type"
          :value="data.value"
          :id="index"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.finance-summary {
  max-width: 65%;
  width: 100%;

  h5 {
    font-size: medium;
  }

  .wrapper {
    margin-top: 3.6rem;

    > ul {
      margin-top: 3rem;

      display: flex;
      flex-flow: column nowrap;
      gap: 3rem;
      list-style: none;
      margin-bottom: 6rem;

      &.empty > li > img {
        width: 100%;
      }
    }

    > h3 {
      font-size: clamp(1.8rem, 6vw, 2.2rem);
    }
  }
}
</style>
