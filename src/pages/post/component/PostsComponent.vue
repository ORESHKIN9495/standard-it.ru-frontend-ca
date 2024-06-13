<script setup lang="ts">
import { fDate } from '@/composables/useDate'
import { sortBy } from 'lodash'
import { RouterLink } from 'vue-router'
import FilterComponent from '../component/FilterComponent.vue'
import { usePosts } from '../store/usePosts'

const url = import.meta.env.VITE_URL

const store = usePosts()

store.find()
</script>

<template>
  <section>
    <FilterComponent></FilterComponent>

    <RouterLink
      v-for="el of sortBy(store.filteredData, 'published')
        .reverse()
        .filter((el) => el.status === true)"
      :key="el.name"
      :to="{
        name: 'post',
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

        <time>{{ fDate(el.published as string) }}</time>
      </article>
    </RouterLink>

    <h2 v-if="!store.filteredData.length">Совпадений не найдено</h2>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-light));
  display: grid;
  grid-template: auto / repeat(5, 1fr);
  gap: 40px;

  h2 {
    grid-column: 1 / -1;
    margin: 40px auto;
  }

  article {
    picture {
      overflow: hidden;

      img {
        display: block;
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
