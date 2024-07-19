<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { useServices } from '@/pages/services/store/useServices'
import { useSolutions } from '@/pages/solutions/store/useSolutions'
import { computed, onMounted, ref } from 'vue'
import ScrollingComponent from './ScrollingComponent.vue'

const services = useServices()
const solutions = useSolutions()

const index = ref(0)

const slider = computed(() => {
  const servicesAray = services.list.filter((el) => el.status === true && el.slide === true)
  servicesAray.map((el) => (el.slug = 'service'))

  const solutionsArray = solutions.list.filter((el) => el.status === true && el.slide === true)
  solutionsArray.map((el) => (el.slug = 'solution'))

  return [...servicesAray, ...solutionsArray]
})

const next = () => {
  index.value =
    (index.value + (1 % slider.value.length) + slider.value.length) % slider.value.length
}

onMounted(() => {
  setInterval(() => next(), 6000)
})
</script>

<template>
  <section>
    <Transition name="fade" mode="out-in">
      <article :key="index">
        <h1>{{ slider[index]?.name }}</h1>

        <p v-html="slider[index]?.description"></p>

        <RouterLink
          v-if="slider[index]?.slug"
          :to="{ name: slider[index]?.slug, params: { id: slider[index].id } }"
          custom
          v-slot="{ navigate }"
        >
          <ButtonComponent title="Подробнее" v-on:click="navigate" />
        </RouterLink>
      </article>
    </Transition>

    <ScrollingComponent />
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: #f6f5f5;
  display: grid;
  grid-template: 1fr auto / minmax(0, 230px) minmax(682px, auto);
  padding: clamp(20px, 2vw, 40px);

  article {
    grid-column: 2 / -1;
    place-self: center baseline;

    p {
      max-width: 720px;
    }

    button {
      margin: 40px 0 0;
    }
  }

  svg {
    grid-column: 2 / -1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 1140px) {
  section {
    grid-template: 1fr auto / auto;

    article {
      grid-column: 1 / -1;
    }

    svg {
      grid-column: 1 / -1;
    }
  }
}
</style>
