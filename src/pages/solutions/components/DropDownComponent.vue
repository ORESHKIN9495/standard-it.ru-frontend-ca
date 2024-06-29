<script setup lang="ts">
import { ref } from 'vue'
import { useFilter } from '../store/useFilter'

const filter = useFilter()

const props = defineProps<{
  data: string[]
  type: 'collections'
}>()

const selected = ref(false)
</script>

<template>
  <article v-on:click="selected = !selected">
    <p
      v-html="
        filter.filteredParams[props.type].length > 22
          ? filter.filteredParams[props.type].slice(0, 22) + '...'
          : filter.filteredParams[props.type]
      "
    />

    <svg width="35" height="35" fill="none" :class="{ selected: selected }">
      <use xlink:href="@/assets/images/sprites.svg#chevron" />
    </svg>

    <ul v-if="selected">
      <li
        v-for="el of props.data"
        :key="el"
        v-on:click="filter.prepare(el, type)"
        v-outside="() => (selected = false)"
      >
        {{ el }}
      </li>
    </ul>
  </article>
</template>

<style scoped lang="scss">
article {
  background-color: #ffffff10;
  cursor: pointer;
  display: grid;
  grid-template: auto / 1fr auto;
  padding: 5px 20px;
  place-items: center baseline;
  position: relative;

  p {
    white-space: nowrap;
  }

  ul {
    background-color: #3969f6;
    inset: 55px 0 auto;
    max-height: 400px;
    overflow-y: auto;
    position: absolute;
    z-index: 2;

    li {
      padding: 10px 20px;

      &:hover {
        background-color: #ffffff10;
      }
    }
  }

  svg {
    &.selected {
      transform: rotate(-90deg);
    }
  }
}
</style>
