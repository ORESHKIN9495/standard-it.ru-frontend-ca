<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { fDate } from '@/composables/useDate'
import { usePosts } from '../store'

const url = import.meta.env.VITE_URL

const store = usePosts()
const props = defineProps({
  data: Object
})
</script>

<template>
  <article :class="['card', { feed: store.state }]">
    <picture>
      <img v-if="props.data?.image" :src="`${url}/out/${props.data?.image}.webp`" alt="" />
    </picture>

    <h3>{{ props.data?.name }}</h3>

    <p v-if="store.state">{{ props.data?.description }}</p>

    <ButtonComponent v-if="store.state" title="Читать далее" />

    <time>{{ fDate(props.data?.published, 'fullDate') }}</time>
  </article>
</template>

<style scoped lang="scss">
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

  &.feed {
    grid-template: auto / auto 1fr;
    margin: auto;
    max-width: 1200px;
    width: 100%;

    h3 {
      grid-column: 1 / -1;
    }

    p {
      grid-column: 1 / -1;
    }

    picture {
      grid-column: 1 / -1;
      height: 400px;

      img {
        transform: initial;
      }
    }

    button {
      padding: 10px 40px;
    }
  }
}
</style>
