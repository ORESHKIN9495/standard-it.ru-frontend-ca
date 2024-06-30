<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import { fDate } from '@/composables/useDate'
import { useEquipments } from '@/pages/equipments/store/useEquipments'
import { useManufacturers } from '@/pages/manufacturers/store/useManufacturers'
import { usePosts } from '@/pages/post/store/usePosts'
import { useRoute } from 'vue-router'

const url = import.meta.env.VITE_URL

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
      <article>
        <h1>
          {{ store.listOne?.name }}
        </h1>

        <p>{{ store.listOne?.description }}</p>
      </article>

      <article class="content" v-html="store.listOne?.content"></article>

      <ul>
        <li><h3>Оборудование производителя:</h3></li>

        <li
          v-for="item of equipments.list.filter((el) =>
            el.manufacturers.some((e) => e.id === +route.params.id)
          )"
          :key="item.id"
          :class="{ active: item.description }"
        >
          <RouterLink
            v-if="item.description"
            :to="{
              name: 'equipment',
              params: { id: item.id }
            }"
          >
            {{ item.name }}
          </RouterLink>

          <p v-else>{{ item.name }}</p>
        </li>
      </ul>

      <div>
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
          <article v-on:click="navigate" class="card">
            <picture>
              <img v-if="el.image" :src="`${url}/out/${el.image}.webp`" alt="" />
            </picture>

            <h3>{{ el.name }}</h3>

            <time>{{ fDate(el.published, 'fullDate') }}</time>
          </article>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);

  section {
    display: grid;
    grid-template: auto / repeat(2, 1fr);
    gap: var(--theme-gap);

    article {
      background-color: rgb(var(--color-light));
      padding: clamp(20px, 2vw, 40px);

      &:first-of-type {
        grid-column: 1 / -1;
      }
    }

    ul {
      background-color: rgb(var(--color-light));
      padding: clamp(20px, 2vw, 40px);

      li {
        &.active {
          &:hover {
            color: rgb(var(--color-theme));
            cursor: pointer;
            text-decoration: none;
          }
        }
      }
    }

    div {
      background-color: rgb(var(--color-light));
      display: grid;
      gap: 20px;
      grid-column: 1 / -1;
      grid-template: auto / repeat(4, 1fr);
      padding: clamp(20px, 2vw, 40px);

      article {
        background-color: #ffffff;
        grid-column: initial !important;
        padding: 20px;

        picture {
          overflow: hidden;

          img {
            display: block;
            transition: 0.2s ease-in-out;
          }
        }

        &:hover {
          picture {
            img {
              transform: scale(1.2);
            }
          }
        }
      }
    }
  }
}
</style>
