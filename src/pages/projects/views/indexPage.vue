<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'

import ButtonComponent from '@/components/ButtonComponent.vue'
import { useMessages } from '@/stores/useMessages'
import { useRoute } from 'vue-router'
import { useProjects } from '../store/useProjects'

const url = import.meta.env.VITE_URL

const route = useRoute()

const messages = useMessages()

const store = useProjects()

store.findOne(route.params.id)
</script>

<template>
  <main v-if="store.listOne">
    <CrumbsComponent :crumb="store.listOne.name"></CrumbsComponent>

    <article>
      <h1>{{ store.listOne.name }}</h1>

      <p>{{ store.listOne.description }}</p>

      <article class="content" v-html="store.listOne.content"></article>
    </article>

    <picture>
      <img v-if="store.listOne.image" :src="`${url}/out/${store.listOne.image}.webp`" alt="" />
    </picture>

    <ul>
      <li>Оборудование производителя:</li>

      <li
        v-for="el of store.listOne.equipments.filter((e) => e.status === true)"
        :key="el.id"
        :class="{ active: el.description }"
      >
        <RouterLink
          v-if="el.description"
          :to="{
            name: 'equipment',
            params: { id: el.id }
          }"
        >
          {{ el.name }}
        </RouterLink>

        <a v-else>{{ el.name }}</a>
      </li>
    </ul>

    <article>
      <ButtonComponent
        v-on:click="(messages.state = true), (messages.title = 'Консультация')"
        title="Консультация"
      ></ButtonComponent>
    </article>
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  gap: var(--theme-gap);

  nav {
    grid-column: 1 / -1;
  }

  article {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);

    p {
      margin: 20px 0;
    }

    &:last-of-type {
      padding: 0;

      button {
        margin: clamp(20px, 2vw, 40px);
      }
    }
  }

  ul {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);

    li {
      &:first-of-type {
        font-weight: 400;
        font-size: 20px;
      }

      &.active {
        &:hover {
          color: var(--c-theme);
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / 1fr;
  }
}
</style>
