<script setup lang="ts">
import { computed } from 'vue'
import { useKnowledge } from '../store'
import { useFilter } from '../store/useFilter'
import DropDownComponent from './DropDownComponent.vue'

const filter = useFilter()
const store = useKnowledge()

const collections = computed(() => store.listCollections.filter((el) => el.status))

store.findCollections()
</script>

<template>
  <aside>
    <h1>{{ $route.meta.name }}</h1>

    <p>
      Раздел "Доска знаний" на нашем IT-сайте представляет собой удобный и информативный инструмент
      для обмена знаниями и опытом в области информационных технологий. Здесь вы найдете широкий
      спектр статей, руководств, видеоуроков и других материалов, которые позволят вам расширить
      свои навыки и углубить свои познания в различных IT-областях.
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
