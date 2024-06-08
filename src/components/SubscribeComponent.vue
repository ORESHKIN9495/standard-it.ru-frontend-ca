<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { mailingErrors, validateEmail } from '@/composables/useValidate'
import { useMessages } from '@/stores/useMessages'
import { ref } from 'vue'

const store = useMessages()

const form = ref({ email: '' })

const prepare = () => {
  validateEmail(form.value.email)

  if (mailingErrors.value.email === '') {
    store.postSubscribe(form.value.email)
  } else {
    setTimeout(() => {
      mailingErrors.value = { email: '' }
    }, 3000)
  }
}
</script>

<template>
  <form v-if="!store.subscribeStatus" v-on:submit.prevent="prepare()">
    <h3>Подписаться на новости</h3>

    <label :class="{ error: mailingErrors.email }">
      <input type="text" v-model="form.email" placeholder="Адрес эл.почты" />

      <p v-if="mailingErrors.email">{{ mailingErrors.email }}</p>
    </label>

    <p>
      При клике на кнопку отправить, вы соглашаетесь с <a href="/">политикой конфиденциальности</a>
    </p>

    <ButtonComponent type="submit" title="Отправить" inverse></ButtonComponent>
  </form>

  <div v-else>
    <h3>Ваш адрес эл.почты успешно отправлен</h3>

    <p>Мы пришлем уведомление на эл.почту</p>
  </div>
</template>

<style scoped lang="scss">
form {
  background-color: rgb(75, 73, 75);
  padding: clamp(20px, 2vw, 40px);
  color: #ffffff;

  h3 {
    margin: 0 0 20px;
  }

  label {
    input {
      border: 1px solid #ffffff;
    }

    &.error {
      input {
        border-color: tomato;
      }

      p {
        color: tomato;
      }
    }
  }

  p {
    font-size: 14px;
    margin: 20px 0;
    opacity: 0.8;

    a {
      text-decoration: underline;

      &:hover {
        color: rgba(var(--color-theme), 0.8);
      }
    }
  }

  button {
    width: 100%;
  }
}

div {
  margin: auto;
  padding: 20px;
  text-align: center;
}
</style>
