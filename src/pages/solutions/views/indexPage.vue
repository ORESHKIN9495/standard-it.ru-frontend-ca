<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import { useMessages } from '@/stores/useMessages'
import type { Cost } from '@/types'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSolutions } from '../store'

const url = import.meta.env.VITE_URL

const messages = useMessages()
const store = useSolutions()
const route = useRoute()

const summary = (array: Cost[]) =>
  computed(() =>
    array?.reduce((acc, object) => {
      return acc + object['summary']
    }, 0)
  )

store.findOne(route.params.id as string)
</script>

<template>
  <main>
    <CrumbsComponent :crumb="store.listOne?.name" />

    <section>
      <h1>{{ store.listOne?.name }}</h1>

      <span>
        Стоимость от:
        {{ store.listOne?.services.length ? summary(store.listOne?.services[0].cost) : 0 }}
        &#8381;</span
      >

      <p>{{ store.listOne?.description }}</p>

      <article class="content" v-html="store.listOne?.content" />
    </section>

    <section v-if="store.listOne?.file">
      <h3>Файл для скачивания:</h3>

      <a :href="`${url}/doc/${store.listOne?.file}.zip`" target="_blank">
        {{ store.listOne?.name }}
      </a>
    </section>

    <ul>
      <li>Сопутствующие услуги</li>

      <RouterLink
        v-for="el of store.listOne?.services.filter((e) => e.status)"
        :key="el.id"
        :to="{
          name: 'service',
          params: { id: el.id }
        }"
        custom
        v-slot="{ navigate }"
      >
        <li v-on:click="navigate">{{ el.name }}</li>
      </RouterLink>
    </ul>

    <section>
      <ButtonComponent
        v-on:click="(messages.state = true), (messages.title = 'Консультация')"
        title="Консультация"
      ></ButtonComponent>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);

  section {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);

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

    h3 {
      margin: 0 0 10px;
    }

    a {
      &:hover {
        color: rgb(var(--color-theme));
      }
    }
  }

  ul {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);

    li {
      &:first-child {
        font-weight: 400;
        margin: 0 0 10px;
      }

      &:not(:first-child) {
        list-style-type: '- ';
        margin: 0 0 0 10px;

        &:hover {
          cursor: pointer;
          color: rgb(var(--color-theme));
        }
      }
    }
  }
}
</style>
