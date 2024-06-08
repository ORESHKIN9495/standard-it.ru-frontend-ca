<script setup lang="ts">
import { uniqBy } from 'lodash'
import { computed, ref } from 'vue'
import { useRegulatoryDocumentation } from '../store/useRegulatoryDocumentation'

const store = useRegulatoryDocumentation()

const collectionsArray = computed(() =>
  store.list
    .map((el) => el.collection)
    .flat()
    .filter((el) => el.status === true)
)

const collectionIndex = ref('Выберите категорию')

const collectionSelected = ref(false)
</script>

<template>
  <aside>
    <h1>{{ $route.meta.name }}</h1>

    <p>
      В нашей компании мы строго соблюдаем все нормативные документы, чтобы обеспечить качество
      продукции и услуг, а также соблюдать законодательство. В этом разделе вы можете ознакомиться с
      основными нормативными документами, регулирующими нашу деятельность.
    </p>

    <ul>
      <li>Фильтр по типу</li>

      <li
        v-on:click="
          $emit('selected', { selected: 'all', name: 'все' }),
            (collectionIndex = 'Выберите категорию')
        "
      >
        Все
      </li>

      <li
        v-on:click="collectionSelected = !collectionSelected"
        v-outside="() => (collectionSelected = false)"
      >
        {{ collectionIndex }}

        <svg :class="{ selected: collectionSelected }" width="35" height="35" fill="none">
          <use xlink:href="@/assets/images/sprites.svg#chevron" />
        </svg>

        <ul v-if="collectionSelected">
          <li
            v-for="el of uniqBy(collectionsArray, 'name')
              .map((el) => el.name)
              .sort((a, b) => a.localeCompare(b))"
            :key="el"
            v-on:click="
              (collectionIndex = el), $emit('selected', { selected: 'collection', name: el })
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
  gap: 40px;
  padding: clamp(20px, 4vw, 40px);

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
