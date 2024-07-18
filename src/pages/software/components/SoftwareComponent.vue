<script setup lang="ts">
import { useSoftware } from '../store/index'
import CardComponent from './CardComponent.vue'

const store = useSoftware()

store.findCollections()
</script>

<template>
  <section>
    <aside>
      <h1>{{ $route.meta.name }}</h1>

      <p>
        Раздел IT оборудования на нашем сайте представляет широкий ассортимент высококачественных
        компьютерных комплектующих и периферийных устройств от ведущих мировых производителей. В
        нашем каталоге вы найдете все необходимое для сборки мощного компьютера, а также множество
        полезных аксессуаров для удобной и эффективной работы.
      </p>
    </aside>

    <RouterLink
      v-for="el of store.listCollections.filter((el) => el.status)"
      :key="el.id"
      :to="{ name: 'software-collection', params: { id: el.id } }"
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
  grid-template: auto / repeat(5, 1fr);
  gap: 40px;

  aside {
    background-color: rgb(var(--color-theme));
    color: #ffffff;
    display: grid;
    gap: 20px;
    grid-column: 1 / 5;
    grid-template: 1fr auto / repeat(2, 1fr);
    padding: clamp(20px, 4vw, 40px);
  }

  article {
    picture {
      overflow: hidden;

      img {
        transition: 0.2s ease-in-out;
      }
    }

    &:hover {
      picture {
        img {
          transform: scale(1.2);
        }
      }
    }
  }
}

@media only screen and (max-width: 1500px) {
  section {
    grid-template: auto / repeat(2, 1fr);

    aside {
      grid-column: 1 / -1;
    }
  }
}

@media only screen and (max-width: 720px) {
  section {
    grid-template: auto / 1fr;

    aside {
      grid-template: auto / 1fr;
    }
  }
}
</style>
