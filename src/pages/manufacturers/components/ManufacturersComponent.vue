<script setup lang="ts">
import { useEquipments } from '@/pages/equipments/store/useEquipments'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useManufacturers } from '../store/useManufacturers'

const route = useRoute()

const url = import.meta.env.VITE_URL

const store = useManufacturers()

const equipments = useEquipments()

const collections = computed(() =>
  equipments.list.filter((el) => el.collection.some((e) => e.id === +route.params.id)).flat()
)
const manufacturer = computed(() => collections.value.map((el) => el.manufacturers).flat())

equipments.find()
store.find()
</script>

<template>
  <section>
    <aside>
      <h1>{{ $route.meta.name }}</h1>

      <p>
        Информация о ведущих компаниях в сфере информационных технологий, их продуктах и роли на
        рынке.
      </p>
    </aside>

    <RouterLink
      v-for="el of store.list.filter(
        (el) => manufacturer.some((e) => e.name === el.name) && el.status
      )"
      :key="el.id"
      :to="{ name: 'manufacturer', params: { id: el.id } }"
      custom
      v-slot="{ navigate }"
    >
      <article v-on:click="navigate" class="card">
        <picture>
          <img v-if="el.image" :src="`${url}/out/${el.image}.webp`" alt="" />
        </picture>

        <h3>{{ el.name }}</h3>
      </article>
    </RouterLink>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-light));
  display: grid;
  grid-template: auto / repeat(5, 1fr);
  gap: 40px;

  aside {
    background-color: rgb(var(--color-theme));
    color: #fff;
    display: grid;
    gap: 20px;
    grid-column: 1 / 5;
    grid-template: 1fr auto / repeat(2, 1fr);
    padding: clamp(20px, 4vw, 40px);
  }

  article {
    picture {
      overflow: hidden;

      img {
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

  @media only screen and (max-width: 1500px) {
    grid-template: auto / repeat(2, 1fr);
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / 1fr;
  }
}
</style>
