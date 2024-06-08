import { ref } from 'vue'

import type { Error, Form } from '@/types'

const errors = ref<Error>({
  name: '',
  email: '',
  phone: ''
})

const mailingErrors = ref({
  email: ''
})

// eslint-disable-next-line
const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const validateEmail = (email: string) => {
  if (email.length > 6 && mailRegex.test(email)) {
    mailingErrors.value.email = ''
  } else {
    mailingErrors.value.email = 'Введите корректный адрес эл.почты'
  }
}

const validate = (data: Form) => {
  if (data.name.length < 2) {
    errors.value.name = 'Введите корректное имя'
  } else {
    errors.value.name = ''
  }

  if (data.email.length > 6 && mailRegex.test(data.email)) {
    errors.value.email = ''
  } else {
    errors.value.email = 'Введите корректный адрес эл.почты'
  }

  if (data.phone.length < 11) {
    errors.value.phone = 'Введите корректный номер телефона'
  } else {
    errors.value.phone = ''
  }
}

export { errors, mailingErrors, validate, validateEmail }
