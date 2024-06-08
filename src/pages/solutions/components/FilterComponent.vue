<script setup lang="ts">
import { uniqBy } from 'lodash'
import { computed, ref } from 'vue'
import { useSolutions } from '../store/useSolutions'

const store = useSolutions()

store.find()

const collections = computed(() =>
  uniqBy(store.list.map((el) => el.collection.filter((el) => el.status === true)).flat(), 'name')
)

const solutionsIndex = ref('Выберите категорию')
const solutionsSelected = ref(false)
</script>

<template>
  <aside>
    <h1>Решения</h1>

    <p>
      Содержит информацию о продуктах и услугах, предлагаемых компанией для решения бизнес-задач
      клиентов
    </p>

    <ul>
      <li>Фильтр по категории</li>

      <li
        v-on:click="
          $emit('selected', { selected: 'all', name: 'все' }),
            (solutionsIndex = 'Выберите категорию')
        "
      >
        Все
      </li>

      <li
        v-on:click="solutionsSelected = !solutionsSelected"
        v-outside="() => (solutionsSelected = false)"
      >
        {{ solutionsIndex }}

        <svg :class="{ selected: solutionsSelected }" width="35" height="35" fill="none">
          <use xlink:href="@/assets/images/sprites.svg#chevron" />
        </svg>

        <ul v-if="solutionsSelected">
          <li
            v-for="el of collections.map((el) => el.name).sort((a, b) => a.localeCompare(b))"
            :key="el"
            v-on:click="
              (solutionsIndex = el), $emit('selected', { selected: 'solutions', name: el })
            "
          >
            {{ el }}
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
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
