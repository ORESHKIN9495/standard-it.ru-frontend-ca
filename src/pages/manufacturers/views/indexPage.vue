<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import { useEquipments } from '@/pages/equipments/store'
import { useManufacturers } from '@/pages/manufacturers/store'
import CardComponent from '@/pages/post/component/CardComponent.vue'
import { usePosts } from '@/pages/post/store'
import { useRoute } from 'vue-router'

const posts = usePosts()
const equipments = useEquipments()
const route = useRoute()
const store = useManufacturers()

posts.find()
store.findOne(route.params.id as string)
equipments.find()
</script>

<template>
  <main>
    <CrumbsComponent :crumb="store.listOne?.name" />

    <section>
      <h1>
        {{ store.listOne?.name }}
      </h1>

      <p>{{ store.listOne?.description }}</p>
    </section>

    <section class="content" v-html="store.listOne?.content" />

    <section>
      <ul>
        <li>Оборудование производителя:</li>

        <RouterLink
          v-for="el of equipments.list.filter((el) =>
            el.manufacturers.some((e) => e.id === +route.params.id)
          )"
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
    </section>

    <section>
      <RouterLink
        v-for="el of posts.list
          .filter((el) => el.manufacturers.some((e) => e.id === +route.params.id))
          .slice(0, 2)"
        :key="el.name"
        :to="{
          name: 'post',
          params: { id: el.id }
        }"
        custom
        v-slot="{ navigate }"
      >
        <CardComponent :data="el" v-on:click="navigate" />
      </RouterLink>
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

    &:first-of-type {
      grid-column: 1 / -1;
    }

    ul {
      li {
        &:first-of-type {
          font-weight: 400;
          font-size: 20px;
        }

        &.active {
          &:hover {
            color: rgb(var(--color-theme));
            cursor: pointer;
          }
        }
      }
    }

    &:last-of-type {
      display: grid;
      gap: 20px;
      grid-column: 1 / -1;
      grid-template: auto / repeat(4, 1fr);
    }
  }
}

@media only screen and (max-width: 1500px) {
  main {
    section {
      &:last-of-type {
        grid-template: auto / 1fr 1fr;
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  main {
    grid-template: auto / 1fr;

    section {
      &:last-of-type {
        grid-template: auto / 1fr;
      }
    }
  }
}
</style>
