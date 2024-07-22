<script setup lang="ts">
import { sortBy } from 'lodash'
import { ref, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
import FilterComponent from '../component/FilterComponent.vue'
import { usePosts } from '../store'
import CardComponent from './CardComponent.vue'

const store = usePosts()

const preloaderState = ref(false)
const direction = ref('down')
const feedCounter = ref(0)

watchEffect(() => {
  store.state ? (feedCounter.value = 6) : (feedCounter.value = store.filteredData.length)

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 0) direction.value = 'down'
    if (window.scrollY >= window.innerHeight) direction.value = 'up'
  })
})

const prepare = (count: number) => {
  preloaderState.value = true

  setTimeout(() => {
    feedCounter.value += count
    preloaderState.value = false
  }, 1000)
}

const scrolled = () => {
  direction.value === 'up'
    ? window.scrollTo({ top: 0, behavior: 'smooth' })
    : window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
}

store.find()
</script>

<template>
  <section :class="{ feed: store.state }">
    <FilterComponent></FilterComponent>

    <RouterLink
      v-for="el of sortBy(store.filteredData, 'published')
        .filter((el) => el.status)
        .slice(0, feedCounter)
        .reverse()"
      :key="el.name"
      :to="{
        name: 'post',
        params: { id: el.id }
      }"
      custom
      v-slot="{ navigate }"
    >
      <CardComponent v-on:click="navigate" :data="el" />
    </RouterLink>

    <button
      v-if="store.state && feedCounter < store.filteredData.length"
      v-on:click="prepare(6)"
      :class="{ pendingButton: preloaderState }"
    >
      Показать еще...
    </button>

    <svg
      v-if="store.state && store.filteredData.length"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="rgb(var(--color-theme))"
      viewBox="0 0 16 16"
      class="arrow-top"
      v-on:click="scrolled()"
      :style="{ transform: `rotate(${direction === 'up' ? 0 : 180}deg)` }"
    >
      <path
        fill-rule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
      />
    </svg>
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
    color: rgb(var(--color-theme));
    margin: auto auto 40px;

    &:hover {
      opacity: 0.6;
    }

    &.pendingButton {
      animation: preload 1s ease-in-out forwards;
    }

    @keyframes preload {
      100% {
        opacity: 0;
      }
    }
  }

  &.feed {
    grid-template: auto / 1fr;

    aside {
      grid-column: 1 / -1;
    }

    svg {
      &.arrow-top {
        cursor: pointer;
        display: block;
        inset: 50% 40px 50% auto;
        position: fixed;
        transition: 0.3s ease-in-out;
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

    &.feed {
      svg {
        &.arrow-top {
          display: none;
        }
      }
    }
  }
}
</style>
