<script setup lang="ts">
import IconChevron from '@/assets/images/icon/IconChevron.vue'
import { usePosts } from '@/pages/post/store'
import { sortBy } from 'lodash'

const store = usePosts()

store.find()
</script>

<template>
  <section>
    <RouterLink
      v-for="el of sortBy(store.list, 'published')
        .reverse()
        .filter((el) => el.status)
        .slice(0, 3)"
      :key="el.id"
      :to="{ name: 'post', params: { id: el.id } }"
      custom
      v-slot="{ navigate }"
    >
      <article v-on:click="navigate">
        <h3>
          {{ el.name }}
        </h3>

        <p>{{ el.description.slice(0, 185) }}...</p>

        <IconChevron direction />
      </article>
    </RouterLink>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: var(--theme-gap);

  article {
    background-color: rgb(var(--color-light));
    cursor: pointer;
    padding: 20px;
    position: relative;

    p {
      margin: 10px 0 40px;
    }

    svg {
      color: rgb(var(--color-light));
      inset: auto 20px 20px;
      position: absolute;
    }

    &:hover {
      background-color: rgb(var(--color-theme));
      color: rgb(var(--color-light));
    }
  }
}

@media only screen and (max-width: 1140px) {
  section {
    grid-template: auto / repeat(2, 1fr);

    article {
      &:last-of-type {
        grid-column: 1 / -1;
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  section {
    grid-template: auto / 1fr;
  }
}
</style>
