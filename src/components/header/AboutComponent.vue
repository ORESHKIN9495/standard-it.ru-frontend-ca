<script setup lang="ts">
import { useNavigate } from '@/stores/useNavigate'

const store = useNavigate()
</script>

<template>
  <Transition name="dialog-fade" mode="out-in">
    <section v-if="store.aboutState">
      <article class="form-fade" v-outside="() => (store.aboutState = false)">
        <nav>
          <h2>О компании</h2>

          <p>
            Ведущий интегратор IT-решений. Комплексная интеграция систем, индивидуальные решения для
            вашего бизнеса.
          </p>
        </nav>

        <nav>
          <RouterLink v-for="el of store.aboutList" :key="el.name" :to="{ name: el.route }">
            {{ el.name }}
          </RouterLink>
        </nav>

        <nav>
          <p>400075, г.Волгоград, ул.Краснополянская 72д</p>

          <a href="tel:8 (8442) 61-32-91">8 (8442) 61-32-91</a>
          <a href="mailto:info@standard-it.ru">info@standard-it.ru</a>
        </nav>
      </article>
    </section>
  </Transition>
</template>

<style lang="scss" scoped>
section {
  background-color: #00000039;
  backdrop-filter: blur(5px);
  inset: 0;
  position: fixed;
  z-index: 6;

  article {
    background-color: rgb(var(--color-light));
    display: grid;
    gap: 60px;
    grid-template: auto / repeat(3, auto);
    justify-content: center;
    margin: 86px 0 0;
    padding: clamp(20px, 4vw, 40px);

    nav {
      display: grid;
      height: fit-content;

      p {
        max-width: 600px;
      }

      &:nth-of-type(2) {
        gap: 5px;

        a {
          white-space: nowrap;

          &:hover {
            color: rgba(var(--color-theme), 0.8);
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

.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
  transition-delay: 0.3s;
}

.dialog-fade-enter-active .form-fade,
.dialog-fade-leave-active .form-fade {
  transition: transform 0.3s ease-in-out;
}

.dialog-fade-enter-from .form-fade,
.dialog-fade-leave-to .form-fade {
  transform: translateY(-100vw);
  transition-delay: 0.3s;
}
</style>
