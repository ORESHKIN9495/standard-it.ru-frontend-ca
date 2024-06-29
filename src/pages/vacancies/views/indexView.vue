<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import VacanciesComponent from '../components/VacanciesComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Вакансии" />

    <VacanciesComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
