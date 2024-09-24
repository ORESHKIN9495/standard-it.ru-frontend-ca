<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useSoftware } from '../store/index'

const route = useRoute()
const store = useSoftware()

const listOne = computed(() => store.list.find((el) => el.id === +route.params.id))

const content = ref()

watchEffect(() => {
  const table = content.value?.querySelector('table')

  if (table) {
    table.replaceWith(
      Object.assign(document.createElement('div'), {
        className: 'table-container',
        innerHTML: table.outerHTML
      })
    )
  }
})

store.find()
</script>

<template>
  <main>
    <CrumbsComponent :crumb="listOne?.name" />

    <section>
      <h1>{{ listOne?.name }}</h1>

      <article
        v-if="listOne?.description"
        ref="content"
        class="content"
        v-html="listOne?.description"
      />
    </section>

    <ul>
      <li>Производители:</li>

      <RouterLink
        v-for="el of listOne?.manufacturers.filter((el) => el.status)"
        :key="el.id"
        :to="{ name: 'manufacturer', params: { id: el.id } }"
        custom
        v-slot="{ navigate }"
      >
        <li v-if="el.description" v-on:click="navigate" :class="{ active: el.description }">
          {{ el.name }}
        </li>

        <li v-else>{{ el.name }}</li>
      </RouterLink>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  gap: var(--theme-gap);

  section {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);
    overflow: auto;
  }

  ul {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 2vw, 40px);

    li {
      &:first-of-type {
        font-weight: 400;
        font-size: 20px;
      }

      &:not(:first-of-type) {
        list-style-type: '- ';
        margin: 0 0 0 10px;
      }

      &.active {
        &:hover {
          cursor: pointer;
          color: rgb(var(--color-theme));
        }
      }
    }
  }
}
</style>
