<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import EquipmentsComponent from '../components/EquipmentsComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Оборудование" />

    <EquipmentsComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
