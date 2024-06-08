<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import ProjectsComponent from '../components/ProjectsComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Проекты" />

    <ProjectsComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
