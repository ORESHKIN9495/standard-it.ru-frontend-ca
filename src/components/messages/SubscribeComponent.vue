<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import InputComponent from '@/components/InputComponent.vue'
import { setErrors } from '@/composables/useErrors'
import { Protector, isEmail, minLength } from '@/composables/useValidate'
import { useMessages } from '@/stores/useMessages'

const store = useMessages()

const protector = new Protector(
  {
    fieldName: 'email',
    rule: isEmail,
    errorMessage: 'Введите корректный адрес эл. почты'
  },
  {
    fieldName: 'email',
    rule: (value: string) => minLength(value, 5),
    errorMessage: 'Электронная почта должна содержать не менее 5 символов'
  }
)

const prepare = () => {
  const errors = protector.validate(store.data)

  if (Object.keys(errors).length > 0) {
    setErrors(errors)

    return
  }

  store.postSubscribe(store.data)
}
</script>

<template>
  <form v-if="!store.subscribeStatus" v-on:submit.prevent="prepare()">
    <h4>Подписаться на новости</h4>

    <InputComponent name="Адрес эл.почты" k="email" type="text" v-model="store.data.email" />

    <p>
      При клике на кнопку отправить, вы соглашаетесь с <a href="/">политикой конфиденциальности</a>
    </p>

    <ButtonComponent type="submit" title="Отправить" inverse></ButtonComponent>
  </form>

  <dialog open v-else>
    <h3>Ваш адрес эл. почты успешно отправлен</h3>

    <p>Мы пришлем уведомление на эл. почту</p>
  </dialog>
</template>

<style scoped lang="scss">
form {
  background-color: rgb(var(--color-text-dark));
  color: rgb(var(--color-light));
  padding: clamp(20px, 2vw, 40px);

  h4 {
    margin: 0 0 10px;
  }

  p {
    font-size: 14px;
    margin: 20px 0;

    a {
      text-decoration: underline;
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }
    }
  }

  button {
    width: 100%;
  }
}

dialog {
  background-color: rgb(var(--color-text-dark));
  padding: clamp(20px, 2vw, 40px);
  place-content: center;
  text-align: center;
}
</style>
