import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Certificate } from '../types'

export const useСertificates = defineStore('сertificates', () => {
  const list = ref<Certificate>()

  const find = async () => {
    await axios
      .get('/сertificates')
      .then((response) => (list.value = response.data))
      .catch((error) => console.log(error))
  }

  return { find, list }
})
