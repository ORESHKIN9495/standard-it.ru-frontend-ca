<script setup lang="ts">
import { useServices } from '@/pages/services/store/useServices'

const store = useServices()
</script>

<template>
  <section>
    <h2>Направления деятельности</h2>

    <RouterLink
      v-for="el of store.list.slice(0, 4).filter((el) => el.status)"
      :key="el.id"
      :to="{ name: 'service', params: { id: el.id } }"
      custom
      v-slot="{ navigate }"
    >
      <article>
        <h3 v-on:click="navigate">{{ el.name }}</h3>

        <p>{{ el.description }}</p>
      </article>
    </RouterLink>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template: auto / 1fr 1fr;
  gap: var(--theme-gap);

  h2 {
    background-color: rgb(var(--color-light));
    grid-column: 1 / -1;
    padding: 20px clamp(20px, 2vw, 40px);
  }

  article {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);

    h3 {
      margin: 0 0 10px;
      width: fit-content;

      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  section {
    grid-template: auto / 1fr;
  }
}
</style>
