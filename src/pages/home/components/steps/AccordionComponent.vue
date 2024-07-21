<script setup lang="ts">
import { useSteps } from '@/pages/home/store/useSteps'
import { ref } from 'vue'

const steps = useSteps()

const index = ref(-1)
const visible = ref(false)

const setStep = (idx: number) => {
  if (index.value != idx) {
    visible.value = false

    index.value = idx

    setTimeout(() => {
      visible.value = true
    }, 500)
  }
}

setStep(0)
</script>

<template>
  <article>
    <h2>Стадии проекта</h2>

    <ul>
      <li
        v-for="(el, idx) of steps.array"
        :key="el.id"
        :class="{ selected: index == idx }"
        :style="`background-color: #ffffff${idx * 10};`"
        v-on:click="setStep(idx)"
      >
        <h3>{{ el.name }}</h3>

        <Transition name="fade">
          <template v-if="index == idx && visible">
            <p v-html="el.content"></p>
          </template>
        </Transition>
      </li>
    </ul>
  </article>
</template>

<style scoped lang="scss">
article {
  background-color: rgb(var(--color-light));
  display: grid;
  grid-template: auto 1fr / auto;

  h2 {
    padding: 20px clamp(20px, 2vw, 40px);
  }

  ul {
    background-color: rgb(var(--color-theme));
    display: flex;
    height: 520px;

    li {
      color: rgb(var(--color-light));
      overflow: hidden;
      padding: 40px;
      transition: all 0.3s ease-in-out;
      width: 78px;

      &:not(.selected) {
        cursor: pointer;
      }

      &.selected {
        width: 100%;

        h3 {
          rotate: 0deg;
        }
      }

      h3 {
        position: absolute;
        rotate: 90deg;
        transform-origin: 0;
        transition: all 0.5s ease-in-out;
      }

      p {
        padding: 40px 0 0;
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  article {
    ul {
      flex-direction: column;
      height: unset;

      li {
        overflow: unset;
        padding: 25px 40px;
        width: unset;

        h3 {
          position: unset;
          rotate: unset;
          transform-origin: unset;
        }

        p {
          padding: 0;
        }
      }
    }
  }
}

.fade-enter-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
