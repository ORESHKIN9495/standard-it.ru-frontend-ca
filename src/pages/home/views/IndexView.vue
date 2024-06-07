<script lang="ts" setup>
import AdvantagesComponent from '../components/advantages/AdvantagesComponent.vue'
import DirectionsComponent from '../components/directions/DirectionsComponent.vue'
import HeroComponent from '../components/hero/HeroComponent.vue'
import ProjectsComponent from '../components/projects/ProjectsComponent.vue'
import StepsComponent from '../components/steps/StepsComponent.vue'
</script>

<template>
  <main>
    <HeroComponent />
    <StepsComponent />
    <DirectionsComponent />
    <ProjectsComponent />
    <AdvantagesComponent />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
