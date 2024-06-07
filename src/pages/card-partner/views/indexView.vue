<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import CardPartnerComponent from '../component/CardPartnerComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Карта партнера" />

    <CardPartnerComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
