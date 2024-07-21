<script setup lang="ts">
import { useNavigate } from '@/stores/useNavigate'

const store = useNavigate()
</script>

<template>
  <Transition name="dialog-fade" mode="out-in">
    <nav v-if="store.menuState" v-outside="() => (store.menuState = false)">
      <RouterLink :to="{ name: 'equipments' }">Оборудование</RouterLink>
      <RouterLink :to="{ name: 'services' }">Каталог услуг</RouterLink>
      <RouterLink :to="{ name: 'projects' }">Проекты</RouterLink>

      <ul>
        <li>О компании</li>

        <RouterLink
          v-for="el of store.aboutList"
          :key="el.name"
          :to="{ name: el.route }"
          custom
          v-slot="{ navigate }"
        >
          <li v-on:click="navigate">{{ el.name }}</li>
        </RouterLink>
      </ul>

      <RouterLink :to="{ name: 'solutions' }">Решения</RouterLink>
      <RouterLink :to="{ name: 'contacts' }">Контакты</RouterLink>
    </nav>
  </Transition>
</template>

<style scoped lang="scss">
nav {
  background-color: rgb(var(--color-theme));
  color: rgb(var(--color-light));
  display: grid;
  gap: 20px;
  inset: 86px 0 auto;
  max-height: 400px;
  overflow: auto;
  padding: clamp(20px, 4vw, 40px);
  position: fixed;
  z-index: 8;

  a {
    width: fit-content;
  }

  ul {
    li {
      width: fit-content;

      &:not(:first-of-type) {
        cursor: pointer;
        list-style-type: '- ';
        margin: 10px 0 0 20px;
      }
    }
  }
}

.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: transform 0.3s ease-in-out;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  transform: translateY(-100vw);
  transition-delay: 0.3s;
}
</style>
