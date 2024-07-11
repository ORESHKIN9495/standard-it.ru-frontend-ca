<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import SoftwareManufacturersComponent from '../components/SoftwareManufacturersComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Производители ПО" />

    <SoftwareManufacturersComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
