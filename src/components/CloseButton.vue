<script setup lang="ts">
const emit = defineEmits(['closePopup'])
</script>

<template>
  <button class="close" @click="emit('closePopup')"></button>
</template>

<style scoped lang="scss">
.close {
  position: absolute;
  width: 0.75rem;
  height: 0.75rem;
  right: 0.875rem;
  top: 0.875rem;
  border: none;
  background: url(../images/close.svg) no-repeat;
  background-size: contain;
  cursor: pointer;
}
</style>