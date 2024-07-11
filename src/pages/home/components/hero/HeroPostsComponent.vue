<script setup lang="ts">
import { usePosts } from '@/pages/post/store/usePosts'
import { sortBy } from 'lodash'

const store = usePosts()

store.find()
</script>

<template>
  <aside>
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

        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.227.852a.562.562 0 0 1 .796 0l6.75 6.75a.563.563 0 0 1 0 .796l-6.75 6.75a.563.563 0 0 1-.796-.796L7.58 8 1.227 1.648a.562.562 0 0 1 0-.796Z"
            stroke="currentColor"
          />
        </svg>
      </article>
    </RouterLink>
  </aside>
</template>

<style lang="scss" scoped>
aside {
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
      inset: auto 20px 20px;
      opacity: 0;
      position: absolute;
    }

    &:hover {
      background-color: rgb(var(--color-theme));
      color: #ffffff;

      svg {
        opacity: 1;
      }
    }
  }
}

@media only screen and (max-width: 1140px) {
  aside {
    grid-template: auto / repeat(2, 1fr);

    article {
      &:last-of-type {
        grid-column: 1 / -1;
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  aside {
    grid-template: auto / 1fr;
  }
}
</style>
