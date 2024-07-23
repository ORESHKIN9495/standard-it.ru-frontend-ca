<script setup lang="ts">
import IconLogotype from '@/assets/images/icon/IconLogotype.vue'
import SubscribeComponent from '@/components/messages/SubscribeComponent.vue'
import { useProjects } from '@/pages/projects/store'
import { useServices } from '@/pages/services/store'
import { useSolutions } from '@/pages/solutions/store'
import { RouterLink } from 'vue-router'

const project = useProjects()
const services = useServices()
const solutions = useSolutions()

project.find()
services.find()
solutions.find()
</script>

<template>
  <footer>
    <nav>
      <RouterLink :to="{ name: 'home' }" custom v-slot="{ navigate }">
        <IconLogotype v-on:click="navigate" />
      </RouterLink>
    </nav>

    <nav>
      <h4>Каталог услуг</h4>

      <RouterLink
        v-for="el of services.list.slice(0, 5).filter((el) => el.status)"
        :key="el.id"
        :to="{ name: 'service', params: { id: el.id } }"
      >
        {{ el.name }}</RouterLink
      >
    </nav>

    <nav>
      <h4>Проекты</h4>

      <RouterLink
        v-for="el of project.list.slice(0, 5).filter((el) => el.status)"
        :key="el.id"
        :to="{ name: 'project', params: { id: el.id } }"
      >
        {{ el.name }}</RouterLink
      >
    </nav>

    <nav>
      <h4>Решения</h4>

      <RouterLink
        v-for="el of solutions.list.slice(0, 5).filter((el) => el.status)"
        :key="el.id"
        :to="{ name: 'solution', params: { id: el.id } }"
      >
        {{ el.name }}</RouterLink
      >
    </nav>

    <SubscribeComponent />
  </footer>
</template>

<style scoped lang="scss">
footer {
  color: rgb(var(--color-light));
  display: grid;
  gap: var(--theme-gap);
  grid-template: auto / repeat(4, 1fr);

  nav {
    background-color: rgb(var(--color-text-dark));
    padding: clamp(20px, 2vw, 40px);

    &:first-of-type {
      grid-column: 1 / -1;
      padding: 20px clamp(20px, 2vw, 40px);
    }

    h4 {
      font-weight: 400;
      margin: 0 0 10px;
    }

    a {
      display: block;
      margin: 0 0 5px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
        text-decoration: underline;
      }
    }
  }
}

@media only screen and (max-width: 1500px) {
  footer {
    grid-template: auto / repeat(2, 1fr);
  }
}

@media only screen and (max-width: 720px) {
  footer {
    grid-template: auto / 1fr;
  }
}
</style>
