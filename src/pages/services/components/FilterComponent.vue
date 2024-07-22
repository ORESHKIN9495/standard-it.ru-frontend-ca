<script setup lang="ts">
import SelectComponent from '@/components/SelectComponent.vue'
import { computed, onMounted } from 'vue'
import { useServices } from '../store'
import { useFilter } from '../store/useFilter'

const filter = useFilter()
const store = useServices()

const collections = computed(() =>
  store.listCollections.filter((el) =>
    store.list
      .map((e) => e.collection.filter((el) => el.status))
      .flat()
      .some((e) => e.name === el.name)
  )
)

onMounted(() => filter.reset())

store.findCollections()
</script>

<template>
  <aside>
    <h1>Каталог услуг</h1>
    <p>
      В данном разделе размещена информацию о предлагаемых нашей компании IT-услугах. Раздел
      помогает клиентам находить подходящие IT-услуги для своих потребностей.
    </p>

    <span>Фильтр по типу</span>

    <div>
      <span v-on:click="filter.reset()">Все</span>

      <SelectComponent
        :data="collections.map((el) => el.name).sort((a, b) => a.localeCompare(b))"
        :filter="filter"
        type="collections"
      />

      <span
        ><a href="https://api.standard-it.ru/doc/IT-Стандарт прайс-лист 2023.xlsx" download
          >Скачать прайс-лист</a
        ></span
      >
    </div>
  </aside>
</template>

<style scoped lang="scss">
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
    grid-template: auto / auto minmax(auto, 270px) auto 1fr;

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
