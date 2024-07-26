<script setup lang="ts">
import CloseButton from "@/components/CloseButton.vue";
import {useInventoryStore} from '@/stores/InventoryStore'

const inventoryStore = useInventoryStore()

</script>

<template>
  <div class="popup">
    <CloseButton @close-popup="inventoryStore.closePopup"/>
    <div class="popup__item">
      <div class="popup__elem" :style="{background: inventoryStore.toolItem.value?.elemStyle}"></div>
      <div class="popup__blur" :style="{background: inventoryStore.toolItem.value?.blurStyle}"></div>

    </div>
    <hr>
    <div class="popup__content">
      <div class="popup__content-title"></div>
      <ul>
        <li class="popup__content-text"></li>
        <li class="popup__content-text"></li>
        <li class="popup__content-text"></li>
        <li class="popup__content-text"></li>
        <li class="popup__content-text"></li>
      </ul>
    </div>
    <hr v-show="!inventoryStore.showFormConfirm">
    <button v-show="!inventoryStore.showFormConfirm" class="popup__delete-btn" @click="inventoryStore.openFormConfirm">
      Удалить предмет
    </button>
    <div v-show="inventoryStore.showFormConfirm" class="popup__block">
      <input
          v-model="inventoryStore.countItemDelete"

             type="number"
             class="block__input"
             placeholder="Введите количество">
      <button class="block__cancel" @click="inventoryStore.cancelDelete">Отмена</button>
      <button class="block__confirm" @click="inventoryStore.confirmDelete">Подтвердить</button>
    </div>

  </div>
</template>

<style scoped lang="scss">
.popup {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  top: 0;
  right: 0;
  width: 15.63rem;
  height: 31.25rem;
  box-sizing: border-box;
  border-left: 0.0625rem solid rgb(77, 77, 77);
  backdrop-filter: blur(1rem);
  background: rgba(38, 38, 38, 0.5);
  z-index: 10;
  //transform: translateY(-100%);
  //animation: ani 2s forwards;

  &__item {
    margin: 3.4375rem 0 2.75rem 1rem;
    width: 7.22rem;
    height: 7.22rem;
    backdrop-filter: none;
    background: rgb(38, 38, 38);
  }

  &__elem {
    position: absolute;
    width: 7.22rem;
    height: 7.22rem;
    left: 3.75rem;
    top: 4.34rem;
    //background: rgb(127, 170, 101);
  }

  &__blur {
    width: 7.22rem;
    height: 7.22rem;
    backdrop-filter: blur(0.75rem);
    //background: rgba(184, 217, 152, 0.35);
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  &__content-title {
    margin-bottom: 1.5rem;
    width: 13.19rem;
    height: 1.88rem;
    border-radius: 0.5rem;
    background: linear-gradient(90.00deg, rgb(60, 60, 60), rgb(68, 68, 68) 51.042%, rgb(51, 51, 51) 100%);
  }

  &__content ul {
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    list-style: none;
  }

  &__content-text {
    width: 13.19rem;
    height: 0.63rem;
    border-radius: 0.25rem;
    background: linear-gradient(90.00deg, rgb(60, 60, 60), rgb(68, 68, 68) 51.042%, rgb(51, 51, 51) 100%);
  }

  &__content-text:nth-child(4) {
    width: 11.25rem;
    height: 0.63rem;
  }

  &__content-text:nth-child(5) {
    width: 5rem;
    height: 0.63rem;
  }

  &__delete-btn {
    margin-top: 0.125rem;
    width: 13.75rem;
    height: 2.44rem;
    border-radius: 0.5rem;
    color: rgb(255, 255, 255);
    font-family: 'SF Pro Display', sans-serif;
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 1.06rem;
    letter-spacing: 0%;
    text-align: center;
    background: rgb(250, 114, 114);
    border: none;
  }

  &__block {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.25rem 0;
    padding: 1.25rem;
    width: 100%;
    height: 8.31rem;
    box-sizing: border-box;
    border: 0.06rem solid rgb(77, 77, 77);
    backdrop-filter: blur(1rem);
    background: rgba(38, 38, 38, 0.6);
    z-index: 999;
  }
}

hr {
  margin-bottom: 1rem;
  width: 13.75rem;
  height: 0.06rem;
  border: none;
  background: rgb(77, 77, 77);
}

.block {

  &__input {
    padding-left: 0.75rem;
    width: 100%;
    height: 2.5rem;
    box-sizing: border-box;
    border: 0.06rem solid rgb(77, 77, 77);
    border-radius: 0.25rem;
    background: rgb(38, 38, 38);
  }

  &__cancel {
    width: 5.5rem;
    height: 2.06rem;
    color: rgb(45, 45, 45);
    font-family: 'SF Pro Display', sans-serif;
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 1.06rem;
    letter-spacing: 0%;
    text-align: center;
    border-radius: 0.5rem;
    background: rgb(255, 255, 255);
    border: none;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px 0px rgb(250, 114, 114);
    -moz-box-shadow: 0px 0px 15px 0px rgb(250, 114, 114);
    box-shadow: 0px 0px 15px 0px rgb(250, 114, 114);
  }

  &__confirm {
    width: 7rem;
    height: 2.06rem;
    color: rgb(255, 255, 255);
    font-family: 'SF Pro Display', sans-serif;
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 1.06rem;
    letter-spacing: 0%;
    text-align: center;
    border-radius: 0.5rem;
    background: rgb(250, 114, 114);
    border: none;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px 0px rgb(250, 114, 114);
    -moz-box-shadow: 0px 0px 15px 0px rgb(250, 114, 114);
    box-shadow: 0px 0px 15px 0px rgb(250, 114, 114);
  }
}

//@keyframes ani {
//  0% {transform: translateX(100%);}
//  100% {transform: translateX(0%);}
//}

</style>