<script setup lang="ts">
import { fDate } from '@/composables/useDate'
import { useKnowledge } from '../store/useKnowledge'
import FilterComponent from './FilterComponent.vue'

const url = import.meta.env.VITE_URL
const store = useKnowledge()

store.find()
</script>

<template>
  <section>
    <FilterComponent></FilterComponent>

    <RouterLink
      v-for="el of store.filteredData.filter((e) => e.status).reverse()"
      :key="el.id"
      :to="{
        name: 'knowledge-page',
        params: { id: el.id }
      }"
      custom
      v-slot="{ navigate }"
    >
      <article v-on:click="navigate" class="card">
        <picture>
          <img v-if="el.image" :src="`${url}/out/${el.image}.webp`" alt="" />
        </picture>

        <h3>{{ el.name }}</h3>

        <time>{{ fDate(el.published, 'fullDate') }}</time>
      </article>
    </RouterLink>
  </section>
</template>

<style lang="scss" scoped>
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
