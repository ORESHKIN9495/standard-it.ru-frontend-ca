<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import { useMessages } from '@/stores/useMessages'
import { useRoute } from 'vue-router'
import { useVacancies } from '../store/useVacancies'

const messages = useMessages()

const store = useVacancies()

const route = useRoute()

const url = import.meta.env.VITE_URL

store.findOne(route.params.id as string)
</script>

<template>
  <main>
    <CrumbsComponent :crumb="store.listOne?.name" />

    <section>
      <article>
        <h1>{{ store.listOne?.name }}</h1>

        <span
          >Заработная плата от:
          {{ store.listOne?.cost }}
          &#8381;</span
        >

        <p>{{ store.listOne?.description }}</p>
      </article>

      <picture>
        <img v-if="store.listOne?.image" :src="`${url}/out/${store.listOne.image}.webp`" alt="" />
      </picture>

      <article class="content" v-html="store.listOne?.content"></article>

      <article>
        <ButtonComponent
          v-on:click="(messages.state = true), (messages.title = 'Откликнуться')"
          title="Откликнуться"
        ></ButtonComponent>
      </article>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);

  section {
    display: grid;
    grid-template: auto / 1fr 1fr;
    gap: var(--theme-gap);
  }

  article {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);

    span {
      font-weight: 400;
      opacity: 0.6;
    }

    p {
      margin: 20px 0 0;
    }
  }
}

@media only screen and (max-width: 720px) {
  main {
    section {
      grid-template: auto / 1fr;
    }
  }
}
</style>
