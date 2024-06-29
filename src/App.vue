<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'
import { useLoader } from '@/stores/useLoader'
import { watchEffect } from 'vue'
import { RouterView } from 'vue-router'
import MessagesComponent from './components/MessagesComponent.vue'
import { useState } from './stores/useState'

const isLoading = useLoader()
const state = useState()

state.findSettings()

watchEffect(() => {
  isLoading.state
    ? document.documentElement.classList.add('pending')
    : document.documentElement.classList.remove('pending')
})
</script>

<template>
  <LoaderComponent v-if="isLoading.state"></LoaderComponent>

  <MessagesComponent />

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
}

h1,
h2,
h3 {
  font-weight: 400;
}

body {
  background-color: rgb(var(--color-border-dark));
  color: rgb(var(--color-text-dark));
  font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.64;
}

.pending {
  overflow: hidden;
}

a {
  cursor: pointer;
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
    border: 1px solid rgb(var(--color-border-dark));
    outline: none;
    padding: 15px 40px;
    width: 100%;

    &:focus {
      border-color: rgb(var(--color-theme));
    }
  }

  textarea {
    resize: none;
  }
}

.card {
  background-color: #ffffff;
  cursor: pointer;
  display: grid;
  gap: 20px;
  grid-template: auto auto 1fr / auto;
  padding: 20px;
  transition: 0.2s ease-in-out;

  picture {
    height: 200px;

    img {
      object-fit: cover;
    }
  }

  h3 {
    font-size: 16px;
  }

  time {
    font-size: 12px;
    margin: auto 0 0 auto;
    opacity: 0.6;
  }

  &:hover {
    box-shadow: 0 20px 20px -10px rgba(21, 31, 50, 0.15);
  }
}

.content {
  img {
    width: 100%;
    margin: 40px 0;
  }

  a {
    color: rgb(var(--color-theme));
    text-decoration: underline;
  }

  ul {
    list-style: disc;
    padding: 20px;
  }
}
</style>
