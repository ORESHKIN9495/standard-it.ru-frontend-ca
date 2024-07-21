import { axios } from '@/commom/axios'
import type { Form } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMessages = defineStore('messages', () => {
  const state = ref(false)
  const title = ref()
  const messagesStatus = ref()
  const subscribeStatus = ref()

  const data = ref({
    name: '',
    email: '',
    company: '',
    phone: '',
    content: '',
    uri: ''
  })

  const postMessage = async (data: Form) => {
    await axios
      .post('/messages', data)
      .then((response) => (messagesStatus.value = response))
      .catch((error) => {
        console.log(error)
      })
  }

  const postSubscribe = async (data: Form) => {
    await axios
      .post('/subscribes', data)
      .then((response) => (subscribeStatus.value = response))
      .catch((error) => {
        console.log(error)
      })
  }

  return { state, messagesStatus, subscribeStatus, postMessage, postSubscribe, title, data }
})
