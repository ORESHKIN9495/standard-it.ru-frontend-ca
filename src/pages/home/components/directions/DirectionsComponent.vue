<script setup lang="ts">
import { useServices } from '@/pages/services/store/useServices'

const store = useServices()
</script>

<template>
  <section>
    <h2>Направления деятельности</h2>

    <article v-for="el of store.list.slice(0, 4).filter((el) => el.status === true)" :key="el.id">
      <h3>{{ el.name }}</h3>

      <p>{{ el.description }}</p>
    </article>
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
      width: fit-content;

      &:hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }

    p {
      margin: 10px 0 0;
    }
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / 1fr;
  }
}
</style>
