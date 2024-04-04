<script setup lang="ts">
import { useNavigate } from '@/stores/useNavigate'

const store = useNavigate()
</script>

<template>
  <section>
    <nav>
      <h2>
        О компании

        <p>
          Ведущий интегратор IT-решений. Комплексная интеграция систем, индивидуальные решения для
          вашего бизнеса.
        </p>
      </h2>

      <ul>
        <RouterLink
          v-for="el of store.array[3].list"
          :key="el.name"
          :to="{ name: 'home' }"
          custom
          v-slot="{ navigate }"
          ><li v-on:click="navigate">{{ el.name }}</li>
        </RouterLink>
      </ul>

      <ul>
        <li>400075, г.Волгоград, ул.Краснополянская 72д</li>

        <li>
          <a href="tel:8 (8442) 61-32-91">8 (8442) 61-32-91</a>
        </li>

        <li>
          <a href="mailto:info@standard-it.ru">info@standard-it.ru</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
section {
  box-shadow: 0 15px 15px #00000020;
  inset: -420px 0 auto 0;
  position: fixed;
  transition: 0.3s ease-in-out;
  z-index: 6;

  &.show {
    background-color: #1b1b1b4e;
    inset: 85px 0 0 0;
  }

  h2 {
    max-width: 600px;

    p {
      font-size: 14px;
    }
  }

  nav {
    background-color: #f6f5f5;
    display: flex;
    justify-content: center;
    gap: 60px;
    padding: clamp(20px, 2vw, 40px);

    ul {
      li {
        cursor: pointer;
        margin: 5px 0 0;
        white-space: nowrap;
        width: fit-content;
      }

      &:first-of-type {
        li {
          &:hover {
            color: rgba(var(--c-theme-alpha), 0.8);
          }

          &::before {
            content: '— ';
            margin: 0 10px 0 0;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 990px) {
  section {
    display: none;
  }
}
</style>
