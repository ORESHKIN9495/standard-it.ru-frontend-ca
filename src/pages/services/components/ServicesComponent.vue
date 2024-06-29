<script setup lang="ts">
import { useServices } from '../store/useServices'
import FilterComponent from './FilterComponent.vue'

const url = import.meta.env.VITE_URL

const store = useServices()
</script>

<template>
  <section>
    <FilterComponent></FilterComponent>

    <RouterLink
      v-for="el of store.filteredData.filter((e) => e.status === true)"
      :key="el.id"
      :to="{ name: 'service', params: { id: el.id } }"
      custom
      v-slot="{ navigate }"
    >
      <article v-on:click="navigate" class="card">
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

  article {
    picture {
      overflow: hidden;

      img {
        transition: 0.2s ease-in-out;
      }
    }

    &:hover {
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
