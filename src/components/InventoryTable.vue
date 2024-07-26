<script lang="ts" setup>

import Popup from "@/components/Popup.vue";
import { useInventoryStore } from '@/stores/InventoryStore'

const inventoryStore = useInventoryStore()

</script>

<template>

  <div class="inventory">
    <div v-for="cell in inventoryStore.tools"
         :key="cell.id"
         @drop="inventoryStore.onDrop($event, cell)"
         class="droppable"
         @dragover.prevent
         @dragenter.prevent
    >
      <div  v-show="cell.count > 0"
          @dragstart="inventoryStore.onDragStart($event, cell)"
           ref="inventoryStore.itemRefs"
           class="draggable"
           draggable="true"
           @click="inventoryStore.openPopup(cell.toolId)"
      >
        <div class="draggable__elem"
            :style="{background: cell.elemStyle}"></div>
        <div class="draggable__blur"
            :style="{background: cell.blurStyle}"></div>
      </div>
      <div v-show="cell.count > 0" class="draggable__count">{{cell.count}}</div>
    </div>

    <Popup v-show="inventoryStore.showPopup"
           :show-form-confirm="inventoryStore.showFormConfirm"
    />
  </div>

</template>

<style scoped lang="scss">
.inventory {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0.0625rem;
  width: 32.81rem;
  height: 31.25rem;
  box-sizing: border-box;
  border: 0.06rem solid rgb(77, 77, 77);
  border-radius: 0.75rem;
  background: rgb(77, 77, 77);
  overflow: hidden;
}

.droppable {
  border: none;
}

.droppable {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgb(38, 38, 38);
}


.draggable {
  position: relative;
  width: 6.56rem;
  height: 6.25rem;
  box-sizing: border-box;
  background: rgb(38, 38, 38);
}

.draggable:hover,
.draggable:focus {
  background: rgb(47, 47, 47);
}

.draggable:active {
  cursor: pointer;
}

.draggable__elem {
  position: absolute;
  width: 3rem;
  height: 3rem;
  left: 1.63rem;
  top: 1.81rem;

}

.draggable__blur {
  position: absolute;
  width: 3rem;
  height: 3rem;
  left: 2rem;
  top: 1.44rem;
  backdrop-filter: blur(0.75rem);
  z-index: 2;
}

.draggable__count {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  right: 0;
  bottom: 0;
  color: rgb(255, 255, 255);
  font-family: 'Inter', sans-serif;
  font-size: 0.63rem;
  font-weight: 500;
  line-height: 0.75rem;
  letter-spacing: 0%;
  text-align: center;
  border: 0.06rem solid rgb(77, 77, 77);
  border-radius: 0.38rem 0rem 0rem 0rem;
  background: rgb(38, 38, 38);
}

.drag {
  position: relative;
  width: 6.56rem;
  height: 6.25rem;
  box-sizing: border-box;
  border: 0.06rem solid rgb(77, 77, 77);
  border-radius: 1.5rem;
  background: #42b983;
  overflow: hidden;
}

</style>