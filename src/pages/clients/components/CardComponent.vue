<script setup lang="ts">
import { fDate } from '@/composables/useDate'
const url = import.meta.env.VITE_URL

const props = defineProps({
  data: Object
})
</script>

<template>
  <article>
    <picture>
      <img v-if="props.data?.image" :src="`${url}/out/${props.data?.image}.webp`" alt="" />
    </picture>

    <h3>
      <a :href="props.data?.link" target="_blank">{{ props.data?.name }}</a>
    </h3>

    <ul>
      <li>Оказываемые услуги:</li>

      <RouterLink
        v-for="el of props.data?.solutions"
        :key="el.id"
        :to="{
          name: 'solution',
          params: { id: el.id }
        }"
        custom
        v-slot="{ navigate }"
      >
        <li v-on:click="navigate">{{ el.name }}</li>
      </RouterLink>
    </ul>

    <time>
      Дата заключения договора:
      {{ fDate(props.data?.published, 'fullDate') }}
    </time>
  </article>
</template>

<style scoped lang="scss">
article {
  display: grid;
  gap: 20px;

  picture {
    height: 300px;

    img {
      object-fit: cover;
    }
  }

  h3 {
    a {
      &:hover {
        opacity: 0.6;
      }
    }
  }

  ul {
    li {
      &:first-of-type {
        font-weight: 400;
      }

      &:not(:first-of-type) {
        cursor: pointer;
        list-style-type: '- ';
        margin: 0 0 0 10px;

        &:hover {
          color: rgb(var(--color-theme));
        }
      }
    }
  }
}
</style>
