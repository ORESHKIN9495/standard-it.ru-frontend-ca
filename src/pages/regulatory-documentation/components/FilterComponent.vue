<script setup lang="ts">
import { computed } from 'vue'
import { useFilter } from '../store/useFilter'
import { useRegulatoryDocumentation } from '../store/useRegulatoryDocumentation'
import DropDownComponent from './DropDownComponent.vue'

const filter = useFilter()
const store = useRegulatoryDocumentation()

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
    <h1>{{ $route.meta.name }}</h1>

    <p>
      В нашей компании мы строго соблюдаем все нормативные документы, чтобы обеспечить качество
      продукции и услуг, а также соблюдать законодательство. В этом разделе вы можете ознакомиться с
      основными нормативными документами, регулирующими нашу деятельность.
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
