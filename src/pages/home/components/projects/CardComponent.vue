<script setup lang="ts">
const url = import.meta.env.VITE_URL

const props = defineProps({
  data: { type: Object, required: true }
})
</script>

<template>
  <article>
    <picture>
      <img v-if="props.data.image" :src="`${url}/out/${props.data.image}.webp`" />
    </picture>

    <h3>{{ props.data.name }}</h3>
  </article>
</template>

<style scoped lang="scss">
article {
  background-color: rgb(var(--color-light));
  padding: 20px;

  &:not(:first-of-type) {
    box-shadow: 0 20px 20px -10px rgba(21, 31, 50, 0.05);
    transition: 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 20px 20px -10px rgba(21, 31, 50, 0.15);
      transform: translateY(-10px);
    }
  }

  picture {
    height: 200px;

    img {
      object-fit: cover;
    }
  }
}
</style>
