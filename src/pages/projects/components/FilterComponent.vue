<script setup lang="ts">
import SelectComponent from '@/components/SelectComponent.vue'
import { useServices } from '@/pages/services/store'
import { uniqBy } from 'lodash'
import { computed } from 'vue'
import { useProjects } from '../store'
import { useFilter } from '../store/useFilter'

const filter = useFilter()
const store = useProjects()
const services = useServices()

const servicesCollections = computed(() =>
  store.list
    .map((el) =>
      el.services.filter((el) => services.list.some((e) => el.name === e.name) && el.status)
    )
    .flat()
)

const industryCollections = computed(() =>
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
      В данном разделе представлены успешные проекты, реализованные нами в области информационных
      технологий, с акцентом на инновации, креативность и профессионализм.
    </p>

    <span>Фильтр по типу</span>

    <div>
      <span v-on:click="filter.reset()">Все</span>

      <SelectComponent
        :data="
          uniqBy(servicesCollections, 'name')
            .map((el) => el.name)
            .sort((a, b) => a.localeCompare(b))
        "
        :filter="filter"
        type="services"
      />

      <SelectComponent
        :data="industryCollections.map((el) => el.name).sort((a, b) => a.localeCompare(b))"
        :filter="filter"
        type="industry"
      />
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
    grid-template: auto / auto repeat(2, minmax(auto, 270px)) 1fr;

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
