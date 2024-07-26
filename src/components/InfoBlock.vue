<script setup lang="ts">

import CloseButton from "@/components/CloseButton.vue";
</script>

<template>
<div class="info">
  <div class="info__content"></div>
  <CloseButton/>
</div>
</template>

<style scoped lang="scss">
.info {
  position: relative;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1.125rem;
  width: 100%;
  height: 4.5rem;
  box-sizing: border-box;
  border: 0.06rem solid rgb(77, 77, 77);
  border-radius: 0.75rem;
  background: rgb(38, 38, 38);

  &__content {
    width: 43.69rem;
    height: 100%;
    border-radius: 0.75rem;
    background: linear-gradient(90.00deg, rgb(60, 60, 60),rgb(68, 68, 68) 51.042%,rgb(51, 51, 51) 100%);
  }


}
</style>