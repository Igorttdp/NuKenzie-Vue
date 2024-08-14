<template>
  <div>
    <img src="../assets/logo.svg" alt="" />
    <h2>Centralize o controle de suas finanças</h2>
    <span>de forma rápida e segura</span>
    <slot />
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-flow: column nowrap;
  width: 30rem;
  gap: 30px;

  > img {
    width: 123px;
    height: 20px;
  }

  > h2 {
    font-size: clamp(3rem, 6vw, 3.8rem);
  }

  > span {
    font-size: 1.6rem;
  }
}
</style>
