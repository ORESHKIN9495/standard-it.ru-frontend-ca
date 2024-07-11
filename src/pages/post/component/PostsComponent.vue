<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { fDate } from '@/composables/useDate'
import { sortBy } from 'lodash'
import { ref, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import FilterComponent from '../component/FilterComponent.vue'
import { useFilter } from '../store/useFilter'
import { usePosts } from '../store/usePosts'

const url = import.meta.env.VITE_URL

const store = usePosts()
const filter = useFilter()
const preloaderState = ref(false)

store.find()

const feedCounter = ref(0)

watchEffect(() => {
  filter.state ? (feedCounter.value = 6) : (feedCounter.value = store.filteredData.length)
})

const prepare = (count: number) => {
  preloaderState.value = true

  setTimeout(() => {
    feedCounter.value += count
    preloaderState.value = false
  }, 1000)
}

const scrolled = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <section :class="{ feed: filter.state }">
    <FilterComponent></FilterComponent>

    <RouterLink
      v-for="el of sortBy(store.filteredData, 'published')
        .reverse()
        .filter((el) => el.status)
        .slice(0, feedCounter)"
      :key="el.name"
      :to="{
        name: 'post',
        params: { id: el.id }
      }"
      custom
      v-slot="{ navigate }"
    >
      <article v-on:click="navigate" class="card">
        <picture>
          <img v-if="el.image" :src="`${url}/out/${el.image}.webp`" alt="" />
        </picture>

        <h3>{{ el.name }}</h3>

        <p v-if="filter.state">{{ el.description }}</p>

        <time>{{ fDate(el.published, 'fullDate') }}</time>
      </article>
    </RouterLink>

    <ButtonComponent
      v-if="feedCounter < store.filteredData.length && filter.state"
      title="Показать еще"
      v-on:click="prepare(6)"
      :class="{ pendingButton: preloaderState }"
    />

    <svg
      v-if="filter.state && store.filteredData.length"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="rgb(var(--color-theme))"
      viewBox="0 0 16 16"
      class="arrow-top"
      v-on:click="scrolled()"
    >
      <path
        fill-rule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
      />
    </svg>

    <h2 v-if="!store.filteredData.length">Совпадений не найдено</h2>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-light));
  display: grid;
  grid-template: auto / repeat(5, 1fr);
  gap: 40px;

  h2 {
    grid-column: 1 / -1;
    margin: 40px auto;
  }

  button {
    margin: auto;

    &.pendingButton {
      animation: preload 1s ease-in-out forwards;
    }

    @keyframes preload {
      100% {
        opacity: 0;
      }
    }
  }

  article {
    picture {
      overflow: hidden;

      img {
        display: block;
        transition: 0.2s ease-in-out;
      }
    }

    &:hover {
      picture {
        img {
          transform: scale(1.2);
        }
      }
    }
  }

  &.feed {
    grid-template: auto / 1fr;

    aside {
      grid-column: 1 / -1;
    }

    article {
      max-width: 1200px;
      margin: auto;
      width: 100%;

      picture {
        height: 400px;

        img {
          transform: initial;
        }
      }
    }

    svg {
      &.arrow-top {
        display: block;
        cursor: pointer;
        inset: auto 0 20px;
        margin: 0 20px 20px auto;
        position: sticky;
      }
    }
  }
}

@media only screen and (max-width: 1500px) {
  section {
    grid-template: auto / repeat(2, 1fr);
  }
}

@media only screen and (max-width: 720px) {
  section {
    grid-template: auto / 1fr;
  }
}
</style>
