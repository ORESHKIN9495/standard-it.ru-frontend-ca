<script setup lang="ts">
const url = import.meta.env.VITE_URL

const props = defineProps({
  data: { type: Object, required: true }
})
</script>

<template>
  <RouterLink :to="{ name: 'project', params: { id: props.data.id } }" custom v-slot="{ navigate }">
    <article v-on:click="navigate" class="card">
      <picture>
        <img v-if="props.data.image" :src="`${url}/out/${props.data.image}.webp`" />
      </picture>

      <h3>{{ props.data.name }}</h3>
    </article>
  </RouterLink>
</template>

<style scoped lang="scss">
article {
  grid-template: auto / auto;

  &:hover {
    transform: translateY(-10px);
  }
}
</style>
