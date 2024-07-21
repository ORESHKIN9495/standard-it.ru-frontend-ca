<script setup lang="ts">
import IconCross from '@/assets/images/icon/IconCross.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import InputComponent from '@/components/InputComponent.vue'
import { setErrors } from '@/composables/useErrors'
import { Protector, isEmail, isPhone, minLength } from '@/composables/useValidate'
import { useMessages } from '@/stores/useMessages'
import { useRoute } from 'vue-router'

const store = useMessages()
const route = useRoute()

const protector = new Protector(
  {
    fieldName: 'email',
    rule: isEmail,
    errorMessage: 'Электронная почта должна быть валидной'
  },
  {
    fieldName: 'email',
    rule: (value: string) => minLength(value, 5),
    errorMessage: 'Электронная почта должна содержать не менее 5 символов'
  },
  {
    fieldName: 'name',
    rule: (value: string) => minLength(value, 1),
    errorMessage: 'Поле не должно быть пустым'
  },
  {
    fieldName: 'phone',
    rule: isPhone,
    errorMessage: 'Номер телефона должен быть в формате +79999999999'
  }
)

const prepare = () => {
  const errors = protector.validate(store.data)

  if (Object.keys(errors).length > 0) {
    setErrors(errors)

    return
  }

  store.data.uri = route.meta.name as string

  store.postMessage(store.data)

  store.state = false

  store.data = {
    name: '',
    email: '',
    company: '',
    phone: '',
    content: '',
    uri: ''
  }
}
</script>

<template>
  <form v-on:submit.prevent="prepare()">
    <IconCross v-on:click="store.state = false" />

    <h1>{{ store.title }}</h1>
    <p>"Напишите нам" и получите быстрые ответы на ваши вопросы!</p>

    <InputComponent name="Имя" k="name" type="text" v-model="store.data.name" />

    <InputComponent name="Адрес эл.почты" k="email" type="text" v-model="store.data.email" />

    <input type="text" placeholder="Компания" v-model="store.data.company" />

    <InputComponent name="Tелефон" k="phone" type="tel" v-model="store.data.phone" />

    <textarea
      type="text"
      placeholder="Ваше сообщение"
      rows="5"
      cols="30"
      v-model="store.data.content"
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
  overflow: auto;
  padding: clamp(20px, 4vw, 40px);
  place-content: baseline;

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
