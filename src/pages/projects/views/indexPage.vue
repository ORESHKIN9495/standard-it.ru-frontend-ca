<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import { useMessages } from '@/stores/useMessages'
import { useRoute } from 'vue-router'
import { useProjects } from '../store/useProjects'

const url = import.meta.env.VITE_URL

const route = useRoute()

const messages = useMessages()

const store = useProjects()

store.findOne(route.params.id as string)
</script>

<template>
  <main v-if="store.listOne">
    <CrumbsComponent :crumb="store.listOne.name"></CrumbsComponent>

    <section>
      <h1>{{ store.listOne.name }}</h1>

      <p>{{ store.listOne.description }}</p>

      <article class="content" v-html="store.listOne.content" />
    </section>

    <picture>
      <img v-if="store.listOne.image" :src="`${url}/out/${store.listOne.image}.webp`" alt="" />
    </picture>

    <ul>
      <li>Оборудование производителя:</li>

      <RouterLink
        v-for="el of store.listOne.equipments.filter((e) => e.status)"
        custom
        v-slot="{ navigate }"
        :key="el.id"
        :to="{
          name: 'equipment',
          params: { id: el.id }
        }"
      >
        <li v-if="el.description" v-on:click="navigate" :class="{ active: el.description }">
          {{ el.name }}
        </li>

        <li v-else>{{ el.name }}</li>
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
  grid-template: auto / repeat(2, 1fr);
  gap: var(--theme-gap);

  nav {
    grid-column: 1 / -1;
  }

  section {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);

    p {
      margin: 10px 0 20px;
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

      &:not(:first-of-type) {
        list-style-type: '- ';
        margin: 0 0 0 10px;
      }

      &.active {
        &:hover {
          cursor: pointer;
          color: rgb(var(--color-theme));
        }
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  main {
    grid-template: auto / 1fr;
  }
}
</style>
