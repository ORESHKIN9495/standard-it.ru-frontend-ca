<script setup lang="ts">
const url = import.meta.env.VITE_URL

const props = defineProps({
  data: Object
})
</script>

<template>
  <article class="card">
    <picture>
      <img v-if="props.data?.image" :src="`${url}/out/${props.data?.image}.webp`" alt="" />
    </picture>

    <h3>{{ props.data?.name }}</h3>
  </article>
</template>

<style scoped lang="scss">
article {
  picture {
    overflow: hidden;

    img {
      object-fit: contain;
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
</style>
