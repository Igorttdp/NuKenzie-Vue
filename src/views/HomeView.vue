<script setup lang="ts">
import LogoBranding from '@/components/LogoBranding.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDashboard = () => router.push('/dashboard')
</script>

<template>
  <main>
    <LogoBranding>
      <BaseButton @click="goToDashboard" label="Iniciar" width="80%" />
    </LogoBranding>
    <img src="../assets/ilustration.svg" alt="" />
  </main>
</template>

<style scoped lang="scss">
main {
  color: #ffffff;
  background-color: rgb(33, 37, 41);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
}
</style>
