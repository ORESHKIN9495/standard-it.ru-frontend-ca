<script setup lang="ts">
import { errors } from '@/composables/useErrors'
interface Input {
  k: string
  name: string
  type: 'text' | 'email' | 'tel'
}

const props = defineProps<Input>()
const model = defineModel<any>()
</script>

<template>
  <label :class="{ error: errors[props.k] }">
    <input :type="props.type" v-model="model" :placeholder="props.name" />

    <span v-for="error in errors[props.k]" :key="error">{{ error }}</span>
  </label>
</template>

<style scoped lang="scss">
label {
  &.error {
    input {
      border-color: tomato;
    }

    span {
      color: tomato;
      display: block;
      margin: 10px 0 0;
    }
  }
}
</style>
