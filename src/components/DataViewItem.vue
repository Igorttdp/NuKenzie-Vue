<script setup lang="ts">
import type { IDataViewItemProps } from '@/typings/interfaces'
import { computed } from 'vue'

const emit = defineEmits(['delete'])

const { description, type, value } = withDefaults(defineProps<IDataViewItemProps>(), {
  description: '',
  type: 0,
  value: 0
})

const intl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  currencyDisplay: 'symbol',
  minimumFractionDigits: 2
})

const dataItemClass = computed(() => (!type ? 'entry' : 'exit'))
const formatedValue = computed(() => intl.format(type ? value! * -1 : value!))
const formatedType = computed(() => (!type ? 'Entrada' : 'Saída'))
</script>

<template>
  <li class="data-item" :class="dataItemClass" @click="emit('delete')">
    <div>
      <h4>{{ description }}</h4>
      <span>{{ formatedType }}</span>
    </div>
    <div>
      <span>{{ formatedValue }}</span>
      <button class="delete-btn"></button>
    </div>
  </li>
</template>

<style scoped>
.data-item {
  width: 100%;
  padding: 2rem 1.3rem 2rem 1.5rem;
  height: 8.7rem;
  border-left-width: 4px !important;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: start;

  > div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 100%;

    &:nth-child(2) {
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      gap: 4rem;
      height: auto;
    }

    > h4 {
      font-size: 1.6rem;
    }
    > span {
      font-size: 1.3rem;
    }
  }
}

.entry {
  border: 1px solid rgb(3, 184, 152);
}

.exit {
  border: 1px solid rgb(195, 41, 41);
}

.delete-btn {
  cursor: pointer;
  background-image: url(../assets/ButtonTrash.svg);
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 22px;
  max-height: 22px;
  min-width: 22px;
  min-height: 22px;
  border: none;
  outline: 0px;
  padding: 0px !important;
}
</style>
