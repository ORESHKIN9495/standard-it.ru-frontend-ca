<script setup lang="ts">
import { useProjects } from '../store/useProjects'
import FilterComponent from './FilterComponent.vue'

const url = import.meta.env.VITE_URL

const store = useProjects()
</script>

<template>
  <section>
    <FilterComponent></FilterComponent>

    <RouterLink
      v-for="el of store.filteredData.filter((el) => el.status === true)"
      :key="el.name"
      :to="{ name: 'project', params: { id: el.id }, state: { el: JSON.stringify({ ...el }) } }"
      custom
      v-slot="{ navigate }"
    >
      <article v-on:click="navigate">
        <picture>
          <img v-if="el.image" :src="`${url}/out/${el.image}.webp`" alt="" />
        </picture>

        <h3>{{ el.name }}</h3>
      </article>
    </RouterLink>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-light));
  display: grid;
  grid-template: auto / repeat(5, 1fr);
  gap: 40px;
  padding: 0 0 40px;

  article {
    background-color: #ffffff;
    cursor: pointer;
    padding: 20px;
    transition: 0.2s ease-in-out;

    picture {
      height: 200px;
      margin: 0 0 20px;
      overflow: hidden;

      img {
        object-fit: cover;
        transition: 0.2s ease-in-out;
      }
    }

    h3 {
      font-size: 16px;
    }

    &:hover {
      box-shadow: 0 20px 20px -10px rgba(21, 31, 50, 0.15);

      picture {
        img {
          transform: scale(1.2);
        }
      }
    }
  }

  @media only screen and (max-width: 1500px) {
    grid-template: auto / repeat(2, 1fr);
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / 1fr;
  }
}
</style>
