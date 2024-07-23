<script setup lang="ts">
import IconChevron from '@/assets/images/icon/IconChevron.vue'
import { ref } from 'vue'

const props = defineProps<{
  data: string[]
  type: 'collections' | 'manufacturer' | 'year' | 'month' | 'services' | 'industry'
  filter: any
}>()

const selected = ref(false)
</script>

<template>
  <article v-on:click="selected = !selected">
    <p
      v-html="
        props.filter.filteredParams[props.type].length > 22
          ? props.filter.filteredParams[props.type].slice(0, 22) + '...'
          : props.filter.filteredParams[props.type]
      "
    />

    <IconChevron :class="{ selected: selected }" />

    <ul v-if="selected">
      <li
        v-for="el of props.data"
        :key="el"
        v-on:click="props.filter.prepare(el, type)"
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
    inset: 60px 0 auto;
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
