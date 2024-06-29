<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import { useRoute } from 'vue-router'
import { useKnowledge } from '../store/useKnowledge'

const url = import.meta.env.VITE_URL

const route = useRoute()

const store = useKnowledge()

store.findOne(route.params.id as string)
</script>

<template>
  <main>
    <CrumbsComponent :crumb="store.listOne?.name" />

    <section>
      <article>
        <picture v-if="store.listOne?.image">
          <img :src="`${url}/out/${store.listOne?.image}.webp`" alt="" />
        </picture>

        <h1>{{ store.listOne?.name }}</h1>
        <p>{{ store.listOne?.description }}</p>
      </article>

      <article class="content" v-html="store.listOne?.content"></article>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);

  section {
    background-color: rgb(var(--color-light));
    padding: 0 clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px);

    h1 {
      margin: 40px 0 20px;
    }

    p {
      text-align: justify;
    }

    article {
      margin: auto;
      max-width: 1200px;

      picture {
        display: block;

        img {
          display: block;
          object-fit: contain;
        }
      }

      &:last-of-type {
        &:deep() {
          p {
            text-align: justify;
            margin: 20px 0 0;
          }
        }
      }
    }
  }
}
</style>
