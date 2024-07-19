<script setup lang="ts">
import { computed } from 'vue'
import { useSolutions } from '../store'
import { useFilter } from '../store/useFilter'
import DropDownComponent from './DropDownComponent.vue'

const filter = useFilter()
const store = useSolutions()

const collections = computed(() =>
  store.listCollections.filter((el) =>
    store.list
      .map((e) => e.collection.filter((el) => el.status))
      .flat()
      .some((e) => e.name === el.name)
  )
)

store.findCollections()
</script>

<template>
  <aside>
    <h1>Решения</h1>

    <p>
      Содержит информацию о продуктах и услугах, предлагаемых компанией для решения бизнес-задач
      клиентов
    </p>

    <span>Фильтр по типу</span>

    <div>
      <span v-on:click="filter.reset()">Все</span>

      <DropDownComponent
        :data="collections.map((el) => el.name).sort((a, b) => a.localeCompare(b))"
        type="collections"
      />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  background-color: rgb(var(--color-theme));
  color: #fff;
  display: grid;
  gap: 20px;
  grid-column: 1 / 5;
  grid-template: 1fr auto / repeat(2, 1fr);
  padding: clamp(20px, 4vw, 40px);

  div {
    display: grid;
    gap: 10px;
    grid-column: 1 / -1;
    grid-template: auto / auto minmax(auto, 270px) 1fr;

    span {
      align-items: center;
      background-color: #ffffff10;
      cursor: pointer;
      display: flex;
      height: 50px;
      padding: 5px 20px;
    }
  }
}

@media only screen and (max-width: 1500px) {
  aside {
    grid-column: 1 / -1;
  }
}

@media only screen and (max-width: 840px) {
  aside {
    div {
      grid-template: auto / auto auto;
    }
  }
}

@media only screen and (max-width: 720px) {
  aside {
    grid-template: auto / auto;

    div {
      grid-template: auto / 1fr;
    }
  }
}
</style>
