<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps(['name'])

/* 
  Crumbs
  Get vue routes and find some values of current route path
*/
const parent = computed(() => {
  let path = router.currentRoute.value.path.replace(/[0-9]/g, '').split('/') // replace /foo/bar/1 to ['foo', 'bar']

  return router.options.routes.filter((obj) => Object.values(obj).some((value) => path.includes(value)))
})
</script>

<template>
  <nav>
    <ul>
      <li>
        <a href="/">Главная</a>
      </li>

      <li v-for="(el, index) of parent.filter((el) => el.name != router.currentRoute.value.name)" :key="index">
        <RouterLink :to="{ name: el.name }">{{ el.meta.name }}</RouterLink>
      </li>

      <li>
        {{ props.name ?? router.currentRoute.value.meta.name }}
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  border-color: var(--c-border-dark);
  border-style: solid;
  border-width: 0 0 1px;
  padding: 20px 40px;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    li {
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
  }
}
</style>
