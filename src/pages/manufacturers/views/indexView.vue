<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import ManufacturersComponent from '../components/ManufacturersComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Производители" />

    <ManufacturersComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
