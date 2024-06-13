<script setup lang="ts">
import { uniqBy } from 'lodash'
import { computed, ref } from 'vue'
import { usePosts } from '../store/usePosts'

const store = usePosts()

const month = ref([
  { id: 1, month: 'январь' },
  { id: 2, month: 'февраль' },
  { id: 3, month: 'март' },
  { id: 4, month: 'апрель' },
  { id: 5, month: 'май' },
  { id: 6, month: 'июнь' },
  { id: 7, month: 'июль' },
  { id: 8, month: 'август' },
  { id: 9, month: 'сентябрь' },
  { id: 10, month: 'октябрь' },
  { id: 11, month: 'ноябрь' },
  { id: 12, month: 'декабрь' }
])

const manufacturersArray = computed(() =>
  store.list
    .map((el) => uniqBy(el.manufacturers, 'name'))
    .flat()
    .filter((el) => el.status === true)
)

const years = computed(() => [...new Set(store.list.map((el) => el.published.slice(0, 4)))])

const monthIndex = ref('Выберите месяц')
const yearIndex = ref('Выберите год')
const manufacturerIndex = ref('Выберите производителя')

const monthSelected = ref(false)
const yearSelected = ref(false)
const manufacturerSelected = ref(false)

const completedParam = ref({
  month: 0,
  year: '',
  collection: ''
})

const filtered = (selected: string) => {
  if (selected === 'every') {
    completedParam.value = {
      month: 0,
      year: '',
      collection: ''
    }

    store.filteredData = store.list
  }

  if (selected === 'month') {
    store.filteredData = store.list.filter(
      (el) => +el.published.slice(5, 7) === completedParam.value.month
    )
  }

  if (selected === 'year') {
    store.filteredData = store.list.filter(
      (el) => el.published.slice(0, 4) === completedParam.value.year
    )
  }

  if (selected === 'collection') {
    store.filteredData = store.list.filter((el) =>
      el.manufacturers.some((el) => el.name === completedParam.value.collection)
    )
  }

  if (selected === 'all' && !completedParam.value.month && !completedParam.value.year) {
    store.filteredData = store.list
  }

  if (selected === 'all' && !completedParam.value.month && completedParam.value.year) {
    store.filteredData = store.filteredData = store.list.filter(
      (el) => el.published.slice(0, 4) === completedParam.value.year
    )
  }

  if (selected === 'all' && completedParam.value.month && !completedParam.value.year) {
    store.filteredData = store.list.filter(
      (el) => +el.published.slice(5, 7) === completedParam.value.month
    )
  }

  if (completedParam.value.month && completedParam.value.year && completedParam.value.collection) {
    store.filteredData = store.list
      .filter((el) => +el.published.slice(5, 7) === completedParam.value.month)
      .filter((el) => el.published.slice(0, 4) === completedParam.value.year)
      .filter((el) => el.manufacturers.some((el) => el.name === completedParam.value.collection))
  }

  if (completedParam.value.month && completedParam.value.year && !completedParam.value.collection) {
    store.filteredData = store.list
      .filter((el) => +el.published.slice(5, 7) === completedParam.value.month)
      .filter((el) => el.published.slice(0, 4) === completedParam.value.year)
  }

  if (completedParam.value.collection && completedParam.value.year && !completedParam.value.month) {
    store.filteredData = store.list
      .filter((el) => el.published.slice(0, 4) === completedParam.value.year)
      .filter((el) => el.manufacturers.some((el) => el.name === completedParam.value.collection))
  }

  if (completedParam.value.collection && completedParam.value.month && !completedParam.value.year) {
    store.filteredData = store.list
      .filter((el) => +el.published.slice(5, 7) === completedParam.value.month)
      .filter((el) => el.manufacturers.some((el) => el.name === completedParam.value.collection))
  }
}
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

    <ul>
      <li
        v-on:click="
          (monthIndex = 'Выберите месяц'),
            (yearIndex = 'Выберите год'),
            (manufacturerIndex = 'Выберите производителя'),
            filtered('every')
        "
      >
        Все
      </li>

      <li v-on:click="monthSelected = !monthSelected" v-outside="() => (monthSelected = false)">
        {{ monthIndex }}

        <svg :class="{ selected: monthSelected }" width="35" height="35" fill="none">
          <use xlink:href="@/assets/images/sprites.svg#chevron" />
        </svg>

        <ul v-if="monthSelected">
          <li
            v-for="el of month"
            :key="el.id"
            v-on:click="(monthIndex = el.month), (completedParam.month = el.id), filtered('month')"
          >
            {{ el.month }}
          </li>
        </ul>
      </li>

      <li v-on:click="yearSelected = !yearSelected" v-outside="() => (yearSelected = false)">
        {{ yearIndex }}

        <svg :class="{ selected: yearSelected }" width="35" height="35" fill="none">
          <use xlink:href="@/assets/images/sprites.svg#chevron" />
        </svg>

        <ul v-if="yearSelected">
          <li
            v-for="el of years"
            :key="el"
            v-on:click="(yearIndex = el), (completedParam.year = el), filtered('year')"
          >
            {{ el }}
          </li>
        </ul>
      </li>

      <li
        v-on:click="manufacturerSelected = !manufacturerSelected"
        v-outside="() => (manufacturerSelected = false)"
      >
        {{ manufacturerIndex }}

        <svg :class="{ selected: manufacturerSelected }" width="35" height="35" fill="none">
          <use xlink:href="@/assets/images/sprites.svg#chevron" />
        </svg>

        <ul v-if="manufacturerSelected">
          <li
            v-on:click="
              (manufacturerIndex = 'Выберите производителя'),
                (completedParam.collection = ''),
                filtered('all')
            "
          >
            Все
          </li>

          <li
            v-for="el of manufacturersArray.map((el) => el.name).sort((a, b) => a.localeCompare(b))"
            :key="el"
            v-on:click="
              (manufacturerIndex = el), (completedParam.collection = el), filtered('collection')
            "
          >
            {{ el }}
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
aside {
  background-color: rgb(var(--color-theme));
  color: #fff;
  display: grid;
  grid-template: 1fr auto / repeat(2, 1fr);
  grid-column: 1 / 5;
  gap: 20px;
  padding: clamp(20px, 4vw, 40px);

  ul {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    grid-column: 1 / -1;
    width: fit-content;

    li {
      background-color: #ffffff10;
      cursor: pointer;
      display: flex;
      padding: 5px 20px;
      place-items: center;
      position: relative;
      width: fit-content;

      svg {
        &.selected {
          transform: rotate(-90deg);
        }
      }

      ul {
        background-color: #3969f6;
        grid-auto-flow: row;
        gap: 0;
        inset: 55px 0 auto;
        max-height: 400px;
        overflow: auto;
        position: absolute;
        z-index: 8;
        width: max-content;

        li {
          background-color: transparent;
          cursor: pointer;
          padding: 10px 20px;
          width: 100%;

          &:hover {
            background-color: #ffffff10;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1500px) {
    grid-column: 1 / -1;
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / 1fr;

    ul {
      grid-auto-flow: row;
    }
  }
}
</style>
