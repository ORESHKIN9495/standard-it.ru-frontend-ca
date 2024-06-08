<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import SolutionsComponent from '../components/SolutionsComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Решения" />

    <SolutionsComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
