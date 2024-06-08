<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useMessages } from '@/stores/useMessages'
import { ref } from 'vue'
import { useQuestions } from '../store/useQuestions'

const messages = useMessages()
const store = useQuestions()
const index = ref()

store.find()
</script>

<template>
  <section>
    <h1>Часто задаваемые вопросы</h1>

    <article>
      <ul
        v-for="(el, idx) of store.list.filter((el) => el.status === true)"
        :key="el.id"
        :class="{ active: index === idx }"
      >
        <li v-on:click="index = idx">
          {{ el.name }}

          <svg :class="{ rotate: index === idx }" v-on:click="index = idx" width="10" height="10">
            <use xlink:href="@/assets/images/sprites.svg#plus"></use>
          </svg>
        </li>

        <li v-if="index === idx" v-html="el.content" v-outside="() => (index = -1)"></li>
      </ul>
    </article>

    <article>
      <h2>У вас остались вопросы?</h2>

      <p>
        Если у вас остались вопросы, свяжитесь с нами и мы обязательно ответим на все ваши вопросы
      </p>

      <ButtonComponent
        v-on:click="(messages.state = true), (messages.title = 'Задайте нам вопрос')"
        title="Обратная связь"
      ></ButtonComponent>
    </article>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template: auto / 1fr 1fr;
  gap: var(--theme-gap);

  h1 {
    background-color: rgb(var(--color-light));
    padding: 20px clamp(20px, 4vw, 40px);
    grid-column: 1 / -1;
  }

  article {
    background-color: rgb(var(--color-light));
    padding: clamp(20px, 4vw, 40px);

    ul {
      background-color: #d7d7d730;
      cursor: pointer;
      margin: 0 0 20px;

      li {
        padding: 20px clamp(20px, 4vw, 40px);

        &:first-of-type {
          display: flex;
          font-weight: 400;
          gap: 20px;
          place-items: center;
        }

        svg {
          margin: 0 0 0 auto;
          min-width: 10px;
          transition: 0.3s ease-in-out;
        }
      }

      &.active {
        li {
          &:last-of-type {
            border-top: 2px solid #ffffff;
            padding: clamp(20px, 2vw, 40px);
          }

          svg {
            transform: rotate(-45deg);
          }
        }
      }
    }

    button {
      margin: 20px 0 0;
    }
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / auto;
  }
}
</style>
