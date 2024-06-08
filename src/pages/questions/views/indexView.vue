<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import QuestionComponent from '../components/QuestionComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Часто задаваемые вопросы" />

    <QuestionComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
