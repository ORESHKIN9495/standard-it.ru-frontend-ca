<script setup lang="ts">
import { ref } from 'vue'
import { useСertificates } from '../store'

const url = import.meta.env.VITE_URL
const store = useСertificates()

store.find()

const selected = ref()
const show = ref(false)
</script>

<template>
  <section>
    <picture
      v-for="el of store.filteredData"
      :key="el.id"
      v-on:click="(selected = el), (show = true)"
    >
      <img v-if="el.image" :src="`${url}/out/${el.image}.webp`" :alt="el.description" />
    </picture>

    <picture v-if="show" class="preview" v-on:click="show = false">
      <img :src="`${url}/out/${selected.image}.webp`" :alt="selected.description" />
    </picture>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  gap: 20px;
  grid-template: auto / repeat(4, minmax(auto, 300px));
  margin: auto;

  picture {
    cursor: pointer;

    &.preview {
      backdrop-filter: blur(5px);
      background-color: #0000001c;
      display: grid;
      inset: 0;
      place-items: center;
      position: fixed;
      z-index: 9;

      img {
        max-height: 800px;
        max-width: 600px;
        object-fit: contain;
      }
    }
  }
}

@media only screen and (max-width: 920px) {
  section {
    grid-template: auto / repeat(2, minmax(auto, 300px));
  }
}
</style>
