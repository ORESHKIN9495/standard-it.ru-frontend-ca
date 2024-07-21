<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import CardComponent from '@/pages/projects/components/CardComponent.vue'
import { useProjects } from '@/pages/projects/store'

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

      <RouterLink :to="{ name: 'projects' }" custom v-slot="{ navigate }">
        <ButtonComponent v-on:click="navigate" title="Подробнее" inverse />
      </RouterLink>
    </article>

    <RouterLink
      v-for="el in store.list.filter((el) => el.status).slice(0, 7)"
      :key="el.id"
      :to="{ name: 'project', params: { id: el.id } }"
      custom
      v-slot="{ navigate }"
    >
      <CardComponent :data="el" v-on:click="navigate" />
    </RouterLink>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-light));
  display: grid;
  gap: 40px;
  grid-template: auto / repeat(4, 1fr);
  padding: clamp(20px, 4vw, 40px) 0;

  article {
    &:first-of-type {
      background-color: rgb(var(--color-theme));
      color: rgb(var(--color-light));
      padding: clamp(20px, 4vw, 40px);

      button {
        margin: 40px 0 0;
      }
    }
  }
}

@media only screen and (max-width: 1500px) {
  section {
    grid-template: auto / repeat(2, 1fr);
  }
}

@media only screen and (max-width: 720px) {
  section {
    grid-template: auto / 1fr;
  }
}
</style>
