<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import CrumbsComponent from '@/components/CrumbsComponent.vue'
import CardPartnerComponent from '@/pages/card-partner/component/CardPartnerComponent.vue'
import { useMessages } from '@/stores/useMessages'
import { useState } from '@/stores/useState'
import MapComponent from '../component/MapComponent.vue'

const state = useState()
const store = useMessages()
</script>

<template>
  <main>
    <CrumbsComponent crumb="Контакты" />

    <section>
      <article>
        <h1>Наши контакты</h1>

        <p>Информация о способах связи с компанией: адрес, телефон, электронная почта.</p>
      </article>

      <article>
        <h3>Телефон</h3>

        <a :href="`tel:${state.settings?.phone}`">{{ state.settings?.phone }}</a>
      </article>

      <article>
        <h3>Почта</h3>

        <a :href="`mailto:${state.settings?.email}`">{{ state.settings?.email }}</a>
      </article>

      <article>
        <h3>Давайте пообщаемся</h3>

        <p>"Напишите нам" и получите быстрые ответы на ваши вопросы!</p>

        <ButtonComponent
          title="Напишите нам"
          v-on:click="(store.state = true), (store.title = 'Напишите нам')"
        />
      </article>

      <article>
        <h3>Адрес</h3>

        <p>{{ state.settings?.address }}</p>
      </article>

      <MapComponent />
    </section>

    <CardPartnerComponent />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: grid;
  gap: var(--theme-gap);

  section {
    display: grid;
    grid-template: auto / repeat(4, 1fr);
    gap: var(--theme-gap);

    article {
      background-color: rgb(var(--color-light));
      padding: clamp(20px, 4vw, 40px);

      &:first-of-type {
        grid-column: 1 / -1;
      }

      &:nth-of-type(4) {
        display: inherit;
        grid-auto-flow: column;
        gap: 20px;
        grid-column: 3 / -1;
        place-items: center baseline;
      }

      &:last-of-type {
        grid-column: 2 / -1;
        overflow: hidden;
      }
    }

    &:last-child {
      grid-template: initial;
    }
  }
}

@media only screen and (max-width: 1390px) {
  main {
    section {
      article {
        &:nth-of-type(4) {
          grid-auto-flow: row;
        }
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  main {
    section {
      grid-template: auto / auto;

      article {
        grid-column: initial !important;
      }
    }
  }
}
</style>
