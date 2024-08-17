<script setup lang="ts">
import { dataInjectionKey } from '@/providers/data/keys'
import type { IDataProviderProps } from '@/typings/interfaces'
import { inject } from 'vue'

const { total } = inject(dataInjectionKey) as IDataProviderProps
</script>

<template>
  <div class="totalWrapper">
    <div>
      <span>Valor total:</span>
      <span>
        <small>O valor total se refere ao saldo</small>
      </span>
    </div>
    <div>
      <span>$ {{ total }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.totalWrapper {
  width: 100%;
  min-height: 9.6rem;
  border: 1px solid rgb(233, 236, 239);
  border-radius: 4px;
  padding: 2rem 2.4rem;
  display: flex;
  flex-flow: row;
  -webkit-box-align: stretch;
  align-items: stretch;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  transition: 0.2s;
  margin-top: 3rem;

  > div {
    &:nth-child(1) {
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      -webkit-box-pack: justify;
      justify-content: space-between;

      > span {
        font-size: 1.6rem;
        font-weight: 700;

        > small {
          font-size: 1.2rem;
          font-weight: normal;
        }
      }
    }

    &:nth-child(2) > span {
      color: rgb(253, 55, 126);
      font-size: 1.6rem;
      font-weight: 700;
    }
  }
}
</style>
