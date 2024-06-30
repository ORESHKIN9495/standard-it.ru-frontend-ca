<script setup lang="ts">
import TheCrumbs from '@/components/CrumbsComponent.vue'
import { useEquipments } from '@/pages/equipments/store/useEquipments'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useEquipments()

store.findOne(route.params.id as string)
</script>

<template>
  <main>
    <TheCrumbs :crumb="store.listOne?.name"></TheCrumbs>

    <article>
      <h1>{{ store.listOne?.name }}</h1>
    </article>

    <article class="content" v-html="store.listOne?.description"></article>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  gap: var(--theme-gap);

  article:deep() {
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
