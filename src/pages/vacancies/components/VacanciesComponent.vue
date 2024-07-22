<script setup lang="ts">
import { useVacancies } from '../store'
import CardComponent from './CardComponent.vue'
import FilterComponent from './FilterComponent.vue'

const store = useVacancies()

store.find()
</script>

<template>
  <section>
    <FilterComponent></FilterComponent>

    <RouterLink
      v-for="el of store.list.filter((e) => e.status)"
      :key="el.id"
      :to="{ name: 'vacancy', params: { id: el.id } }"
      custom
      v-slot="{ navigate }"
    >
      <CardComponent :data="el" v-on:click="navigate" />
    </RouterLink>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: rgb(var(--color-light));
  display: grid;
  grid-template: auto / repeat(5, 1fr);
  gap: 40px;
}

@media only screen and (max-width: 1500px) {
  section {
    grid-template: auto / repeat(2, 1fr);
  }
}

@media only screen and (max-width: 720px) {
  section {
    grid-template: auto / 1fr;
  }
}
</style>
