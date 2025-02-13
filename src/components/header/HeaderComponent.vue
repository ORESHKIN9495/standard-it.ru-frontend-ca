<script setup lang="ts">
import IconLogotype from '@/assets/images/icon/IconLogotype.vue'
import IconMenu from '@/assets/images/icon/IconMenu.vue'
import IconPlus from '@/assets/images/icon/IconPlus.vue'
import { useNavigate } from '@/stores/useNavigate'
import { RouterLink } from 'vue-router'
import AboutComponent from './AboutComponent.vue'
import MenuComponent from './MenuComponent.vue'

const store = useNavigate()
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'home' }" custom v-slot="{ navigate }">
      <IconLogotype v-on:click="navigate" />
    </RouterLink>

    <nav>
      <RouterLink :to="{ name: 'equipments' }">Оборудование</RouterLink>
      <RouterLink :to="{ name: 'services' }">Каталог услуг</RouterLink>
      <RouterLink :to="{ name: 'projects' }">Проекты</RouterLink>

      <a v-on:click="store.aboutState = !store.aboutState">
        О компании

        <IconPlus :class="{ transition: store.aboutState }" />
      </a>

      <RouterLink :to="{ name: 'solutions' }">Решения</RouterLink>
      <RouterLink :to="{ name: 'contacts' }">Контакты</RouterLink>

      <IconMenu v-on:click="store.menuState = !store.menuState" />
    </nav>

    <nav>
      <a href="tel:8 (8442) 61-32-91">+7 (8442) 61-32-91</a>
      <a href="mailto:info@standard-it.ru">info@standard-it.ru</a>
    </nav>
  </header>

  <MenuComponent />
  <AboutComponent />
</template>

<style lang="scss" scoped>
header {
  background-color: rgb(var(--color-light));
  border-bottom: 1px solid rgb(var(--color-border-dark));
  display: grid;
  grid-template: 85px / 230px 1fr minmax(auto, 424px);
  position: sticky;
  top: 0;
  z-index: 9;

  nav {
    display: flex;
    padding: 0 clamp(20px, 2vw, 40px);

    &:first-of-type {
      align-items: center;
      border-color: rgb(var(--color-border-dark));
      border-style: solid;
      border-width: 0 1px;

      a {
        margin: 0 40px 0 0;

        svg {
          margin: 0 0 0 10px;
          transition: transform 0.3s ease-in-out;

          &.transition {
            transform: rotate(45deg);
          }
        }

        &:last-of-type {
          border-bottom: 1.5px solid rgb(var(--color-theme));
        }
      }
    }

    a {
      white-space: nowrap;
    }

    &:last-of-type {
      flex-direction: column;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 1220px) {
    nav {
      &:first-of-type {
        a {
          &:last-of-type {
            display: none;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1130px) {
    nav {
      &:first-of-type {
        a {
          &:nth-child(5) {
            display: none;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    nav {
      &:first-of-type {
        a {
          &:nth-child(4) {
            display: none;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 870px) {
    nav {
      &:first-of-type {
        a {
          &:nth-child(3) {
            display: none;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 764px) {
    grid-template: 85px / 230px 1fr;

    nav {
      &:first-of-type {
        a {
          display: none;
        }
      }

      &:last-of-type {
        display: none;
      }
    }
  }
}
</style>
