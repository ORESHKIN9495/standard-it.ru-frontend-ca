<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import SoftwareComponent from '../components/SoftwareComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="ПО" />

    <SoftwareComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
