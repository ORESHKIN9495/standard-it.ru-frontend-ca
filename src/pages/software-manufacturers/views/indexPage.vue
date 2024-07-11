<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import { useManufacturers } from '@/pages/manufacturers/store/useManufacturers'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useManufacturers()

const url = import.meta.env.VITE_URL

store.find()

// const listOne = computed(() =>
//   store.list.filter((el) => el.manufacturers.some((e) => e.id === +route.params.id)).flat()
// )

store.findOne(route.params.id as string)
</script>

<template>
  <main>
    <CrumbsComponent :crumb="store.listOne?.name" />

    <section>
      <h1>
        {{ store.listOne?.name }}
      </h1>
    </section>

    <section class="content" v-html="store.listOne?.description" />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);

  section {
    display: grid;
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);
  }
}
</style>
