<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import KnowledgeComponent from '../components/KnowledgeComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Доска знаний" />

    <KnowledgeComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
