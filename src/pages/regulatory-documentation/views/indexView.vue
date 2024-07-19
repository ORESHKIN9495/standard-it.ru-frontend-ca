<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import FilterComponent from '../components/FilterComponent.vue'
import { useRegulatoryDocumentation } from '../store'

const url = import.meta.env.VITE_URL

const store = useRegulatoryDocumentation()

store.find()
</script>

<template>
  <main>
    <CrumbsComponent crumb="Правовая документация" />

    <FilterComponent></FilterComponent>

    <section>
      <ul>
        <li v-for="el of store.filteredData.filter((el) => el.status)" :key="el.id">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
            />
          </svg>

          <a :href="`${url}/doc/${el.file}.zip`" target="_blank"> {{ el.name }} </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);

  section {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);

    ul {
      li {
        svg {
          margin: 20px 20px 0 0;
        }

        a {
          vertical-align: text-bottom;

          &:hover {
            color: rgb(var(--color-theme));
          }
        }
      }
    }
  }
}
</style>
