<script setup lang="ts">
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import PostsComponent from '../component/PostsComponent.vue'
</script>

<template>
  <main>
    <CrumbsComponent crumb="Новости" />

    <PostsComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  gap: var(--theme-gap);
}
</style>
