<script setup lang="ts">
import { reactive } from 'vue'
import BaseButton from './BaseButton.vue'
import type { IDataViewItemProps } from '@/typings/interfaces'

const emit = defineEmits(['save'])

const data = reactive<IDataViewItemProps>({ description: '', type: 0, value: null })

const emitSave = () => {
  emit('save', { ...data })

  data.description = ''
  data.type = 0
  data.value = null
}
</script>

<template>
  <form class="form" @submit.prevent="emitSave">
    <div class="inputLabel">
      <span>Descrição</span>
      <input
        v-model="data.description"
        type="text"
        name="description"
        id="description"
        placeholder="Digite aqui sua descrição"
        required
      />
      <span><small>Ex: Compra de roupas</small></span>
    </div>
    <div>
      <div class="inputLabel value">
        <span>Valor</span>
        <div>
          <input
            v-model.number="data.value"
            type="text"
            name="value"
            id="value"
            required
            placeholder="20,00"
          />
          <span><strong>R$</strong></span>
        </div>
      </div>
      <div class="inputLabel">
        <span>Tipo de valor</span>
        <select v-model="data.type" name="type" id="type">
          <option :value="0">Entrada</option>
          <option :value="1">Saída</option>
        </select>
      </div>
    </div>
    <BaseButton label="Inserir Valor" reverse />
  </form>
</template>

<style scoped lang="scss">
.form {
  max-width: 36rem;
  width: 100%;
  height: 36rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  padding: 3.8rem 2.5rem;
  border: 1px solid rgb(233, 236, 239);

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;

    > div {
      width: 45%;
    }
  }
}

.inputLabel {
  display: flex;
  flex-flow: column nowrap;

  > span:not(:has(small)) {
    font-size: 1.4rem;
  }

  > span > small {
    font-size: 10px;
  }

  input,
  select {
    width: 100%;
    padding: 1.3rem 1.6rem;
    background-color: rgb(248, 249, 250);
    margin: 0.8rem 0;
    border-radius: 12px;
    font-size: 1.6rem;
  }

  > div {
    position: relative;

    > input {
      padding-left: 3.6rem;
    }

    > span {
      font-size: 1.4rem;

      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
