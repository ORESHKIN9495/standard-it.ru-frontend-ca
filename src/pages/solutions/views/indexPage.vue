<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import type { Cost } from '@/pages/services/types'
import { useMessages } from '@/stores/useMessages'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSolutions } from '../store'

const messages = useMessages()

const store = useSolutions()

const route = useRoute()

const url = import.meta.env.VITE_URL

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

      <span>
        Стоимость от:
        {{
          store.listOne?.services.length ? summary(store.listOne?.services[0].cost as Cost[]) : 0
        }}
        &#8381;</span
      >

      <p>{{ store.listOne?.description }}</p>

      <article class="content" v-html="store.listOne?.content" />
    </section>

    <section class="file" v-if="store.listOne?.file">
      <h3>Файл для скачивания:</h3>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
        />
      </svg>

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

    &:last-of-type {
      padding: 0;
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
      }

      &:hover {
        cursor: pointer;
        color: rgb(var(--color-theme));
      }
    }
  }

  button {
    margin: clamp(20px, 2vw, 40px);
  }
}
</style>
