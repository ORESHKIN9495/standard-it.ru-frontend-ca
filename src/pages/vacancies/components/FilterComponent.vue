<script setup lang="ts">
import { useFilter } from '../store/useFilter'
import DropDownComponent from './DropDownComponent.vue'

const filter = useFilter()
</script>

<template>
  <aside>
    <h1>{{ $route.meta.name }}</h1>

    <p>
      В данном разделе размещена информацию о предлагаемых нашей компанией вакансиях. Раздел
      помогает клиентам находить подходящие вакансии для дальнейшего трудоустройства.
    </p>

    <span>Фильтр по типу</span>

    <div>
      <span v-on:click="filter.reset()">Все</span>

      <DropDownComponent :data="filter.getDate" type="published" />
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
