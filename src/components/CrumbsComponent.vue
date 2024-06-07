<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  crumb: String
})

const breadcrumbs = computed(() =>
  router.options.routes.filter((el) => route.path.includes(el.path) && el.path !== route.path)
)
</script>

<template>
  <nav>
    <RouterLink v-for="(el, index) of breadcrumbs" :key="index" :to="{ name: el.name }">
      {{ el.meta?.name }}
    </RouterLink>

    <span v-if="props.crumb" v-text="props.crumb" />
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  gap: 12px;
  height: fit-content;
  margin: 0 0 48px;

  a,
  span {
    background-color: rgb(var(--color-theme));
    border-radius: var(--theme-radius);
    color: rgb(var(--color-light));

    &::after {
      color: var(--c-border-dark);
      content: '―';
      margin: 0 0 0 10px;
    }

    &:last-child {
      &::after {
        content: none;
      }
    }
  }

  span {
    color: rgba(89, 93, 99, 0.6);
  }
}
</style>
