<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

:root {
  --c-border-dark: #d7d7d7;
  --c-border-light: #d7d7d74f;
  --c-theme-alpha: 15, 98, 254;
  --c-text-dark: #4a494a;
  --c-text-dark-alpha: 75, 73, 75;
  --t-gap: 40px;
}

h1 {
  font-size: clamp(24px, 4vw, 36px);
  line-height: 1.42;
}

h2 {
  font-size: clamp(18px, 4vw, 22px);
}

h3 {
  font-size: clamp(16px, 4vw, 18px);
}

body {
  background-color: #f8f8f8;
  color: var(--c-text-dark);
  font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  line-height: 1.64;
}
</style>
