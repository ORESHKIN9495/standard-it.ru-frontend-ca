<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import CertificatesComponent from '../components/CertificatesComponent.vue'
import FilterComponent from '../components/FilterComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Сертификаты" />

    <FilterComponent />

    <CertificatesComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: rgb(var(--color-light));
  display: grid;
  gap: var(--theme-gap);
}
</style>
