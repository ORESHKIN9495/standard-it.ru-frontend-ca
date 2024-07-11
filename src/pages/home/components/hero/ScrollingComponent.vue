<script setup lang="ts">
const scrollToElement = () => {
  window.scrollTo({
    top: (document.querySelector('#steps') as HTMLElement).offsetTop - 86,
    behavior: 'smooth'
  })
}
</script>

<template>
  <svg fill="none" width="24" viewBox="0 0 79 123" v-on:click="scrollToElement()">
    <rect
      id="mouse"
      width="71"
      height="115"
      x="4"
      y="4"
      stroke="currentColor"
      stroke-width="6"
      rx="35.5"
    />
    <rect width="12" height="24" x="34" y="30" fill="currentColor" rx="6" id="wheel" />
  </svg>
</template>

<style scoped lang="scss">
svg {
  color: rgb(var(--color-theme));
  cursor: pointer;
  grid-column: 2 / -1;
  opacity: 0.6;
  margin: 20px 0 0;

  &:hover {
    opacity: 1;
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(20px);
  }
}

svg #wheel {
  animation: scroll ease 1.5s infinite;
}
</style>
