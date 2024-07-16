<script setup lang="ts">
import { computed } from 'vue'
import { useEquipments } from '../store/useEquipments'
import CardComponent from './CardComponent.vue'

const store = useEquipments()

const collections = computed(() => store.list.map((el) => el.collection).flat())

store.find()
</script>

<template>
  <section>
    <aside>
      <h1>{{ $route.meta.name }}</h1>

      <p>
        Раздел IT оборудования на нашем сайте представляет широкий ассортимент высококачественных
        компьютерных комплектующих и периферийных устройств от ведущих мировых производителей. В
        нашем каталоге вы найдете все необходимое для сборки мощного компьютера, а также множество
        полезных аксессуаров для удобной и эффективной работы.
      </p>
    </aside>

    <RouterLink
      v-for="el of store.listCollections.filter((el) =>
        collections.some((e) => e.name === el.name && e.status)
      )"
      :key="el.id"
      :to="{ name: 'manufacturers', params: { id: el.id } }"
      custom
      v-slot="{ navigate }"
    >
      <CardComponent :data="el" v-on:click="navigate" />
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
}

@media only screen and (max-width: 1500px) {
  section {
    grid-template: auto / repeat(2, 1fr);

    aside {
      grid-column: 1 / -1;
      grid-template: auto / 1fr;
    }
  }
}

@media only screen and (max-width: 720px) {
  section {
    grid-template: auto / 1fr;
  }
}
</style>
