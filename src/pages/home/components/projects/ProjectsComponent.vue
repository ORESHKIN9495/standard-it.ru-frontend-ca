<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useProjects } from '@/pages/projects/store/useProjects'
import CardComponent from './CardComponent.vue'

const store = useProjects()
</script>

<template>
  <section>
    <article>
      <h2>Наши проекты</h2>

      <p>
        В данном разделе представлены успешные проекты, реализованные нами в области информационных
        технологий, с акцентом на инновации, креативность и профессионализм.
      </p>

      <ButtonComponent title="Подробнее" inverse />
    </article>

    <CardComponent
      v-for="el in store.list.filter((el) => el.status === true).slice(0, 7)"
      :key="el.id"
      :data="el"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-light));
  display: grid;
  gap: 40px;
  grid-template: auto / repeat(4, 1fr);

  h3 {
    font-size: 16px;
    margin: 20px 0 0;
  }

  article {
    &:first-of-type {
      background-color: rgb(var(--color-theme));
      color: #fff;
      padding: clamp(20px, 4vw, 40px);

      button {
        margin: 40px 0 0;
      }
    }
  }

  @media only screen and (max-width: 1500px) {
    grid-template: auto / repeat(2, 1fr);
  }

  @media only screen and (max-width: 720px) {
    grid-template: auto / 1fr;
  }
}
</style>
