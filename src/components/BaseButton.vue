<script lang="ts" setup>
import type { IBaseButtonProps } from '@/typings/interfaces';


const { label, width, reverse } = withDefaults(defineProps<IBaseButtonProps>(), {
  label: '',
  width: '100%',
  reverse: false
})
</script>

<template>
  <button class="btn" :class="{ 'btn-reversed': reverse }">
    {{ label }}
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  cursor: pointer;
  background-color: transparent;
  border: 3px solid rgb(253, 55, 126);
  color: rgb(253, 55, 126);
  transition: all 0.3s;
  padding: 12px;
  border-radius: 8px;

  max-width: 100%;
  width: v-bind(width);

  &:hover {
    background-color: rgb(253, 55, 126);
    color: #ffffff;
  }
}

.btn-reversed {
  background-color: rgb(253, 55, 126);
  color: #ffffff;

  &:hover {
    filter: brightness(0.9);
  }
}
</style>
