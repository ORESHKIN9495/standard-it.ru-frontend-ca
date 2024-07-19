<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import { useMessages } from '@/stores/useMessages'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useServices } from '../store'
import type { Cost } from '../types'

const messages = useMessages()

const store = useServices()

const route = useRoute()

store.findOne(route.params.id as string)

const summary = (array: Cost[]) =>
  computed(() =>
    array?.reduce((acc, object) => {
      return acc + object['summary']
    }, 0)
  )
</script>

<template>
  <main>
    <CrumbsComponent :crumb="store.listOne?.name" />

    <section>
      <h1>{{ store.listOne?.name }}</h1>

      <span>Стоимость от: {{ summary(store.listOne?.cost as Cost[]) ?? 0 }} &#8381;</span>

      <p>{{ store.listOne?.description }}</p>

      <ButtonComponent
        v-on:click="(messages.state = true), (messages.title = 'Консультация')"
        title="Консультация"
      ></ButtonComponent>
    </section>

    <section class="content" v-html="store.listOne?.content" />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);

  section {
    background-color: rgb(var(--color-light));
    padding: 40px;

    span {
      font-weight: 400;
      opacity: 0.6;
    }

    p {
      margin: 10px 0 20px;
    }

    &:deep() {
      p {
        text-align: justify;

        img {
          max-width: 600px;
        }
      }
    }
  }
}
</style>
