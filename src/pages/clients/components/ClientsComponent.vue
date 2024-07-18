<script setup lang="ts">
import { fDate } from '@/composables/useDate'
import { computed } from 'vue'
import { useClients } from '../store/useClients'
import CardComponent from './CardComponent.vue'

const store = useClients()

const groupedItems = computed(() =>
  store.list
    .filter((el) => el.status)
    .reduce((accumulator: any, el) => {
      const published = fDate(el.published, 'year')
      if (!accumulator[published as string]) accumulator[published as string] = []

      accumulator[published as string].push(el)

      return accumulator
    }, {})
)

store.find()
</script>

<template>
  <section v-for="(el, date) of groupedItems" :key="el.id">
    <h2>{{ date }}</h2>

    <CardComponent v-for="item of el" :key="item.id" :data="item" />
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-light));
  display: grid;
  gap: 40px;
  height: fit-content;
  padding: clamp(20px, 4vw, 40px);

  h2 {
    color: rgb(var(--color-theme));
    font-size: 60px;
    grid-column: 1 / -1;
  }
}
</style>
