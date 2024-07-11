<script setup lang="ts">
import DropDownComponent from '@/components/DropDownComponent.vue'
import { useNavigate } from '@/stores/useNavigate'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const store = useNavigate()
const active = ref(false)
</script>

<template>
  <header id="header">
    <RouterLink :to="{ name: 'home' }" custom v-slot="{ navigate }">
      <svg width="152" height="48" v-on:click="navigate">
        <use xlink:href="@/assets/images/sprites.svg#logo"></use>
      </svg>
    </RouterLink>

    <nav>
      <RouterLink :to="{ name: 'equipments' }">Оборудование</RouterLink>

      <RouterLink :to="{ name: 'services' }">Каталог услуг</RouterLink>

      <RouterLink :to="{ name: 'projects' }">Проекты</RouterLink>

      <a v-on:click="store.state = !store.state" v-outside="() => (store.state = false)">
        О компании

        <svg width="10" height="10" :class="{ transition: store.state }">
          <use xlink:href="@/assets/images/sprites.svg#plus"></use>
        </svg>
      </a>

      <RouterLink :to="{ name: 'solutions' }">Решения</RouterLink>

      <RouterLink :to="{ name: 'contacts' }">Контакты</RouterLink>

      <svg width="25" height="25" v-on:click="active = !active">
        <use xlink:href="@/assets/images/sprites.svg#menu"></use>
      </svg>
    </nav>

    <nav>
      <a href="tel:8 (8442) 61-32-91">8 (8442) 61-32-91</a>

      <a href="mailto:info@standard-it.ru">info@standard-it.ru</a>
    </nav>
  </header>

  <ul v-if="active" class="menu">
    <RouterLink
      v-for="el of store.array"
      :key="el.name"
      :to="{ name: 'home' }"
      custom
      v-slot="{ navigate }"
    >
      <li v-on:click="navigate" v-outside="() => (active = false)">
        {{ el.name }}

        <ul v-if="el.list">
          <RouterLink
            v-for="list of el.list"
            :key="list.name"
            :to="{ name: 'home' }"
            custom
            v-slot="{ navigate }"
          >
            <li v-on:click="navigate">- {{ list.name }}</li>
          </RouterLink>
        </ul>
      </li>
    </RouterLink>
  </ul>

  <DropDownComponent :class="{ show: store.state }" />
</template>

<style lang="scss" scoped>
header {
  border-color: rgb(var(--color-border-dark));
  border-style: solid;
  border-width: 0 0 1px;
  background-color: rgb(var(--color-light));
  display: grid;
  grid-template: 85px / 230px 1fr minmax(auto, 424px);
  position: sticky;
  top: 0;
  z-index: 9;

  svg {
    cursor: pointer;
    margin: auto;
  }

  nav {
    display: flex;
    padding: 0 20px;

    &:first-of-type {
      align-items: center;
      border-color: rgb(var(--color-border-dark));
      border-style: solid;
      border-width: 0 1px;

      a {
        margin: 0 40px 0 0;

        svg {
          cursor: default;
          display: inline;
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

    svg {
      display: none;
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

        svg {
          display: inline;
          margin: 0 0 0 auto;
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

.menu {
  inset: 86px 0 auto;
  max-height: 400px;
  overflow: auto;
  position: fixed;
  padding: clamp(20px, 2vw, 40px);

  li {
    margin: 10px 0;

    ul {
      margin: 0 0 0 20px;
    }
  }
}
</style>
