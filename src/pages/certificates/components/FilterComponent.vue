<script setup lang="ts">
import SelectComponent from '@/components/SelectComponent.vue'
import { computed, onMounted } from 'vue'
import { useСertificates } from '../store'
import { useFilter } from '../store/useFilter'

const filter = useFilter()
const store = useСertificates()

const getCollections = computed(() => store.listCollections.map((el) => el.name))

onMounted(() => filter.reset())

store.findCollections()
</script>

<template>
  <aside>
    <h1>{{ $route.meta.name }}</h1>
    <p>
      Представляет информацию о всех сертификатах и наградах, которые были получены компанией. Этот
      раздел демонстрирует профессионализм и компетентность компании.
    </p>

    <span>Фильтр по типу</span>

    <div>
      <span v-on:click="filter.reset()">Все</span>

      <SelectComponent :data="getCollections" :filter="filter" type="collections" />
    </div>
  </aside>
</template>

<style scoped lang="scss">
aside {
  background-color: rgb(var(--color-theme));
  color: #ffffff;
  display: grid;
  gap: 20px;
  grid-column: 1 / -1;
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
