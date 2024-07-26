<script setup lang="ts">

</script>

<template>
  <div class="sidebar">
    <div class="sidebar__img"></div>
    <div class="sidebar__content">
      <div class="sidebar__content-title"></div>
      <div class="sidebar__content-text"></div>
      <div class="sidebar__content-text"></div>
      <div class="sidebar__content-text"></div>
      <div class="sidebar__content-text"></div>
      <div class="sidebar__content-text"></div>
      <div class="sidebar__content-desc"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 31.25rem;
  padding: 1.125rem 0.875rem;
  box-sizing: border-box;
  border: 0.06rem solid rgb(77, 77, 77);
  border-radius: 0.75rem;
  background: rgb(38, 38, 38);
  backdrop-filter: blur(0.75rem);

  &__img {
    margin-bottom: 1.25rem;
    width: 13rem;
    height: 15rem;
    border-radius: 0.5rem;
    backdrop-filter: blur(0.75rem);
    background: url(src/images/image.webp) no-repeat center;
    background-size: contain;
    z-index: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  &__content-title {
    margin-bottom: 1.5rem;
    width: 11.88rem;
    height: 1.63rem;
    border-radius: 0.5rem;
    background: linear-gradient(90.00deg, rgb(60, 60, 60),rgb(68, 68, 68) 51.042%,rgb(51, 51, 51) 100%);
  }

  &__content-text {
    margin-bottom: 1rem;
    width: 9.69rem;
    height: 0.63rem;
    border-radius: 0.25rem;
    background: linear-gradient(90.00deg, rgb(60, 60, 60),rgb(68, 68, 68) 51.042%,rgb(51, 51, 51) 100%);
  }

  &__content-text:nth-child(3) {
    width: 11.88rem;
  }

  &__content-text:nth-child(4) {
    width: 10.63rem;
  }

  &__content-text:nth-child(5) {
    width: 10rem;
  }

  &__content-text:nth-child(6) {
    width: 8.75rem;
    margin-bottom: 1.5rem;
  }

  &__content-desc {
    width: 5rem;
    height: 0.63rem;
    border-radius: 0.25rem;
    background: linear-gradient(90.00deg, rgb(60, 60, 60),rgb(68, 68, 68) 51.042%,rgb(51, 51, 51) 100%);
  }
}
</style>