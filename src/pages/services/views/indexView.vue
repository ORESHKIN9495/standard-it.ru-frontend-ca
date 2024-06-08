<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import ServicesComponent from '../components/ServicesComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Каталог услуг" />

    <ServicesComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
