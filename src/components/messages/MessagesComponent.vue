<script setup lang="ts">
import { useMessages } from '@/stores/useMessages'
import FormComponent from './FormComponent.vue'

const store = useMessages()
</script>

<template>
  <Transition name="dialog-fade" mode="out-in">
    <section v-if="store.state">
      <FormComponent class="form-fade" />
    </section>
  </Transition>
</template>

<style scoped lang="scss">
section {
  backdrop-filter: blur(5px);
  background-color: rgba(var(--color-text-dark), 0.1);
  inset: 0;
  position: fixed;
  z-index: 12;
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
  transform: translateX(100vw);
  transition-delay: 0.3s;
}
</style>
