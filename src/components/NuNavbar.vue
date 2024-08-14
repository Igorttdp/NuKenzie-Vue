<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => router.back()
</script>

<template>
  <header>
    <nav>
      <img src="../assets/logoInverted.svg" alt="logo" />
      <button @click="goToHome">Início</button>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  box-shadow: 0 1px 20px #00000978;

  > nav {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 3.2rem 0;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    @media (max-width: 1200px) {
      padding: 3.2rem 2rem;
    }

    > button {
      cursor: pointer;
      padding: 1.05rem 1.5rem;
      border-radius: 8px;
      transition: all 0.3s;

      &:hover {
        filter: brightness(0.95);
      }
    }
  }
}
</style>
