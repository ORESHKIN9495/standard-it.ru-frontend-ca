<script setup lang="ts">
import SubscribeComponent from '@/components/SubscribeComponent.vue'
import { useProjects } from '@/pages/projects/store/useProjects'
import { useServices } from '@/pages/services/store/useServices'
import { useSolutions } from '@/pages/solutions/store/useSolutions'
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
      <RouterLink to="/" custom v-slot="{ navigate }">
        <svg width="152" height="48" v-on:click="navigate">
          <use xlink:href="@/assets/images/sprites.svg#logo"></use>
        </svg>
      </RouterLink>
    </nav>

    <nav>
      <h4>Каталог услуг</h4>

      <a v-for="el of services.list.slice(0, 5).filter((el) => el.status === true)" :key="el.id">
        {{ el.name }}
      </a>
    </nav>

    <nav>
      <h4>Проекты</h4>

      <a v-for="el of project.list.slice(0, 5).filter((el) => el.status === true)" :key="el.id">
        {{ el.name }}
      </a>
    </nav>

    <nav>
      <h4>Решения</h4>

      <a v-for="el of solutions.list.slice(0, 5).filter((el) => el.status === true)" :key="el.id">
        {{ el.name }}
      </a>
    </nav>

    <SubscribeComponent />
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: grid;
  grid-template: auto / repeat(4, 1fr);
  gap: var(--theme-gap);
  color: #ffffff;

  nav {
    background-color: rgb(75, 73, 75);
    padding: clamp(20px, 2vw, 40px);

    &:first-of-type {
      grid-column: 1 / -1;
      padding: 20px clamp(20px, 2vw, 40px);

      svg {
        cursor: pointer;
      }
    }

    h4 {
      font-weight: 400;
      margin: 0 0 10px;
    }

    a {
      display: block;
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
