<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'
import { useLoader } from '@/stores/useLoader'
import { RouterView } from 'vue-router'

const isLoading = useLoader()
</script>

<template>
  <LoaderComponent v-if="isLoading.state"></LoaderComponent>

  <HeaderComponent />

  <RouterView />

  <FooterComponent />
</template>

<style lang="scss">
@import '@/assets/scss/reset.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

:root {
  --color-border-dark: 215, 215, 215;
  --color-theme: 15, 98, 254;
  --color-light: 246, 245, 245;
  --color-text-dark: 74, 73, 74;
  --theme-gap: 1px;
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
  font-weight: 400;
}

body {
  background-color: rgb(var(--color-border-dark));
  color: rgb(var(--color-text-dark));
  font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.64;
}

picture {
  display: block;
}

img {
  height: 100%;
  width: 100%;
}

form {
  input,
  textarea {
    background: none;
    border: 1px solid rgba(var(--c-text-dark-alpha), 0.4);
    outline: none;
    padding: 15px 40px;
    width: 100%;

    &:focus {
      border-color: var(--c-theme);
    }
  }

  textarea {
    resize: none;
  }
}
</style>
