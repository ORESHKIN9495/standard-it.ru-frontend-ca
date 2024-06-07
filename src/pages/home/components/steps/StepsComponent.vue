<script setup lang="ts">
import { useSteps } from '@/pages/home/store/useSteps'
import AccordionComponent from './AccordionComponent.vue'
import CardComponent from './CardComponent.vue'

const store = useSteps()
</script>

<template>
  <section id="steps">
    <AccordionComponent />

    <div>
      <CardComponent v-for="el of store.array.slice(0, 4)" :key="el.id" :data="el" />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: grid;
  grid-template: auto / 1fr minmax(auto, 849px);
  gap: var(--theme-gap);

  div {
    display: grid;
    grid-template: auto / repeat(2, 1fr);
    gap: var(--theme-gap);
  }
}

@media only screen and (max-width: 1500px) {
  section {
    grid-template: auto / 1fr;
  }
}

@media only screen and (max-width: 720px) {
  section {
    div {
      grid-template: auto / 1fr;
    }
  }
}
</style>
