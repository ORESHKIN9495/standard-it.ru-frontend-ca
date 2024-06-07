<script setup lang="ts">
const props = defineProps({
  data: { type: Object, required: true }
})
</script>

<template>
  <article>
    <h3>{{ props.data.name }}</h3>

    <p>{{ props.data.content.slice(0, 200) }}...</p>
  </article>
</template>

<style scoped lang="scss">
article {
  background-color: rgb(var(--color-light));
  padding: clamp(20px, 2vw, 40px);

  p {
    margin: 10px 0 0;
  }
}
</style>
