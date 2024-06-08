<script setup lang="ts">
import { computed, ref } from 'vue'
import { useServices } from '../store/useServices'
import FilterComponent from './FilterComponent.vue'

const url = import.meta.env.VITE_URL

const store = useServices()

store.find()

const index = ref({
  selected: 'all',
  name: 'все'
})

const filteredList = computed(() => {
  if (index.value.selected === 'all') {
    return store.list
  } else {
    return store.list.filter((el) => el.collection.some((el) => el.name === index.value.name))
  }
})
</script>

<template>
  <section>
    <FilterComponent v-on:selected="index = $event"></FilterComponent>

    <RouterLink
      v-for="el of filteredList.filter((e) => e.status === true)"
      :key="el.id"
      :to="{ name: 'service', params: { id: el.id } }"
      custom
      v-slot="{ navigate }"
    >
      <article v-on:click="navigate">
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
  padding: 0 0 40px;

  article {
    background-color: #ffffff;
    cursor: pointer;
    padding: 20px;
    transition: 0.2s ease-in-out;

    picture {
      height: 200px;
      overflow: hidden;

      img {
        object-fit: cover;
        transition: 0.2s ease-in-out;
      }
    }

    h3 {
      font-size: 16px;
    }

    &:hover {
      box-shadow: 0 20px 20px -10px rgba(21, 31, 50, 0.15);

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
