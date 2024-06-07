<script setup lang="ts">
import HeroCarouselComponent from './HeroCarouselComponent.vue'
import HeroPostsComponent from './HeroPostsComponent.vue'
</script>

<template>
  <div>
    <HeroCarouselComponent></HeroCarouselComponent>

    <HeroPostsComponent></HeroPostsComponent>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: grid;
  gap: var(--theme-gap);
  grid-template: auto / 1fr 424px;
  min-height: calc(100vh - 85px);
  overflow: hidden;
  position: relative;

  &::before {
    animation: scales 40s ease-in-out 1s 1 forwards;
    background: url('@/assets/images/20776109_v1069-009.webp') center / cover no-repeat;
    content: '';
    inset: 0;
    opacity: 0.2;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  @keyframes scales {
    0% {
      transform: scale(1);
    }
    16.666667% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1.5);
    }
    66.666667% {
      transform: scale(1.2);
    }
    to {
      transform: scale(1);
    }
  }
}

@media only screen and (max-width: 1140px) {
  div {
    grid-template: auto / auto;
  }
}
</style>
