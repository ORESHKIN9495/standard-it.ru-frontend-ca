<script setup lang="ts">
import IconCross from '@/assets/images/icon/IconCross.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { errors, validate } from '@/composables/useValidate'
import { useMessages } from '@/stores/useMessages'
import type { Form } from '@/types'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const store = useMessages()
const route = useRoute()

const form = ref<Form>({
  name: '',
  email: '',
  company: '',
  phone: '',
  content: '',
  uri: ''
})

const prepare = () => {
  validate(form.value)

  if (errors.value.name === '' && errors.value.email === '' && errors.value.phone === '') {
    form.value.phone = form.value.phone.replace(/ /g, '')

    form.value.uri = route.meta.name as string

    store.postMessage(form.value)

    store.state = false
  } else {
    setTimeout(() => {
      errors.value = { name: '', email: '', phone: '' }
    }, 3000)
  }
}

watchEffect(() => {
  if (store.state === false) errors.value = { name: '', email: '', phone: '' }
})
</script>

<template>
  <form v-on:submit.prevent="prepare()">
    <IconCross v-on:click="store.state = false" />

    <h1>{{ store.title }}</h1>
    <p>"Напишите нам" и получите быстрые ответы на ваши вопросы!</p>

    <label :class="{ error: errors.name }">
      <input type="text" placeholder="Имя" v-model="form.name" />
      <p v-if="errors.name">{{ errors.name }}</p>
    </label>

    <label :class="{ error: errors.email }">
      <input type="text" placeholder="Email" v-model="form.email" />
      <p v-if="errors.email">{{ errors.email }}</p>
    </label>

    <input type="text" placeholder="Компания" v-model="form.company" />

    <label :class="{ error: errors.phone }">
      <input type="text" placeholder="Телефон" v-mask="'+7 ### ### ## ##'" v-model="form.phone" />
      <p v-if="errors.phone">{{ errors.phone }}</p>
    </label>

    <textarea
      type="text"
      placeholder="Ваше сообщение"
      rows="5"
      cols="30"
      v-model="form.content"
    ></textarea>

    <p>
      При клике на кнопку отправить, вы соглашаетесь с
      <a href="/">политикой конфиденциальности</a>
    </p>

    <ButtonComponent type="submit" title="Отправить"></ButtonComponent>
  </form>
</template>

<style scoped lang="scss">
form {
  background-color: rgb(var(--color-light));
  display: grid;
  gap: 20px;
  height: 100%;
  margin: 0 0 0 auto;
  max-width: 400px;
  padding: clamp(20px, 4vw, 40px);
  place-content: baseline;

  label {
    &.error {
      input {
        border-color: tomato;
      }

      p {
        color: tomato;
        margin: 5px 0 0;
      }
    }
  }

  p {
    font-size: 14px;
    opacity: 0.8;

    a {
      text-decoration: underline;

      &:hover {
        color: rgb(var(--color-theme));
      }
    }
  }

  button {
    width: 100%;
  }
}
</style>
