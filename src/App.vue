<script setup lang="ts">
import SidebarBlock from "@/components/SidebarBlock.vue";
import InventoryTable from "@/components/InventoryTable.vue";
import InfoBlock from "@/components/InfoBlock.vue";

</script>
<template>
  <main class="main">
    <div class="container">
      <SidebarBlock/>
      <InventoryTable/>
      <InfoBlock/>
    </div>
  </main>

</template>

<style lang="scss">

.main {
  position: relative;
  padding-top: 2.5rem;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgb(0, 0, 0);
}

.container {
  position: relative;
  display: grid;
  grid-template-columns: 14.75rem 1fr;
  gap: 1.5rem;
  width: 49.06rem;
  margin: 0 auto;
}


</style>
