<script setup lang="ts">
import { uniqBy } from 'lodash'
import { computed, ref } from 'vue'
import { useServices } from '../store/useServices'

const store = useServices()

store.find()

const collections = computed(() =>
  uniqBy(store.list.map((el) => el.collection.filter((el) => el.status === true)).flat(), 'name')
)

const servicesIndex = ref('Выберите категорию')
const servicesSelected = ref(false)

const downloadExcel = () =>
  (window.location.href = 'https://api.standard-it.ru/doc/IT-Стандарт прайс-лист 2023.xlsx')
</script>

<template>
  <aside>
    <h1>Каталог услуг</h1>
    <p>
      В данном разделе размещена информацию о предлагаемых нашей компании IT-услугах. Раздел
      помогает клиентам находить подходящие IT-услуги для своих потребностей.
    </p>

    <ul>
      <li>Фильтр по категории</li>

      <li
        v-on:click="
          $emit('selected', { selected: 'all', name: 'все' }),
            (servicesIndex = 'Выберите категорию')
        "
      >
        Все
      </li>

      <li
        v-on:click="servicesSelected = !servicesSelected"
        v-outside="() => (servicesSelected = false)"
      >
        {{ servicesIndex }}

        <svg :class="{ selected: servicesSelected }" width="35" height="35" fill="none">
          <use xlink:href="@/assets/images/sprites.svg#chevron" />
        </svg>

        <ul v-if="servicesSelected">
          <li
            v-for="el of collections.map((el) => el.name).sort((a, b) => a.localeCompare(b))"
            :key="el"
            v-on:click="
              (servicesIndex = el), $emit('selected', { selected: 'solutions', name: el })
            "
          >
            {{ el }}
          </li>
        </ul>
      </li>

      <li v-on:click="downloadExcel">Скачать прайс-лист</li>
    </ul>
  </aside>
</template>

<style scoped lang="scss">
aside {
  background-color: rgb(var(--color-theme));
  color: #fff;
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  grid-column: 1 / 5;
  gap: 40px;
  padding: clamp(20px, 4vw, 40px);

  h1 {
    margin: 0;
  }

  ul {
    display: grid;
    grid-template: auto / auto auto 1fr;
    gap: 10px;
    grid-column: 1 / -1;
    margin: auto 0 0;

    li {
      &:first-of-type {
        grid-column: 1 / -1;
      }

      &:not(:first-of-type) {
        background-color: #ffffff10;
        cursor: pointer;
        display: flex;
        place-items: center;
        padding: 5px 20px;
        position: relative;
        width: fit-content;

        svg {
          &.selected {
            transform: rotate(-90deg);
          }
        }

        ul {
          background-color: #3969f6;
          grid-template: auto / auto;
          inset: 50px 0 auto;
          max-height: 400px;
          max-width: 280px;
          overflow: auto;
          position: absolute;
          width: max-content;
          z-index: 8;

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
  }

  @media only screen and (max-width: 1500px) {
    grid-column: 1 / -1;
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / 1fr;

    ul {
      grid-template: auto / 1fr;
    }
  }
}
</style>
