<script setup lang="ts">
import TheCrumbs from '@/components/CrumbsComponent.vue'
import { useRoute } from 'vue-router'
import { useEquipments } from '../store'

const route = useRoute()
const store = useEquipments()

store.findOne(route.params.id as string)
</script>

<template>
  <main>
    <TheCrumbs :crumb="store.listOne?.name"></TheCrumbs>

    <section>
      <h1>{{ store.listOne?.name }}</h1>
    </section>

    <section class="content" v-html="store.listOne?.description" />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  gap: var(--theme-gap);

  section:deep() {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);

    p {
      img {
        max-width: 600px !important;
      }
    }
  }
}
</style>
