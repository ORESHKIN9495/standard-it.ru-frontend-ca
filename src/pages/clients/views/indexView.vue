<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import ClientsComponent from '../components/ClientsComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Наши клиенты" />

    <h1>Наши клиенты</h1>

    <ClientsComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
  grid-template: auto / repeat(2, 1fr);

  nav {
    grid-column: 1 / -1;
  }

  h1 {
    background-color: rgb(var(--color-light));
    grid-column: 1 / -1;
    padding: clamp(20px, 4vw, 40px);
  }
}

@media only screen and (max-width: 720px) {
  main {
    grid-template: auto / 1fr;
  }
}
</style>
