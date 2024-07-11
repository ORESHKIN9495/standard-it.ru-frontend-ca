<script setup lang="ts">
import { useManufacturers } from '@/pages/manufacturers/store/useManufacturers'
import { computed } from 'vue'
import DropDownComponent from '../component/DropDownComponent.vue'
import { useFilter } from '../store/useFilter'
import { usePosts } from '../store/usePosts'

const store = usePosts()
const filter = useFilter()
const manufacturers = useManufacturers()

const getManufacturers = computed(() =>
  manufacturers.list.filter((el) =>
    store.list
      .map((e) => e.manufacturers.filter((el) => el.status))
      .flat()
      .some((e) => e.name === el.name)
  )
)

manufacturers.find()
</script>

<template>
  <aside>
    <h1>{{ $route.meta.name }}</h1>

    <p>
      Информационный блок о последних событиях и тенденциях в мире IT. Здесь пользователи могут
      узнавать о новых продуктах и технологиях, обновлениях ПО, результаты исследований и
      аналитические обзоры рынка.
    </p>

    <span>Фильтр по типу</span>

    <div>
      <span v-on:click="filter.reset()">Все</span>

      <DropDownComponent :data="filter.date.map((el) => el.month)" type="month" />

      <DropDownComponent :data="filter.getYars" type="year" />

      <DropDownComponent
        :data="getManufacturers.map((el) => el.name).sort((a, b) => a.localeCompare(b))"
        type="manufacturer"
      />

      <span v-on:click="filter.state = !filter.state">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
          :class="{ active: filter.state }"
        >
          <path
            fill-rule="evenodd"
            d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5m0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5"
          />
          <path d="M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
        </svg>
      </span>
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
    grid-template: auto / auto repeat(3, minmax(auto, 270px)) auto 1fr;

    span {
      align-items: center;
      background-color: #ffffff10;
      cursor: pointer;
      display: flex;
      height: 50px;
      padding: 5px 20px;

      &:last-of-type {
        width: fit-content;
      }
    }

    svg {
      transition: 0.3s ease-in-out;
      transform: rotate(-90deg);

      &.active {
        transform: rotate(0);
      }
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
