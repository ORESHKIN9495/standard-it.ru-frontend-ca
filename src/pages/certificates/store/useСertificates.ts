import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Certificate } from '../types'

export const useСertificates = defineStore('сertificates', () => {
  const list = ref<Certificate[]>([])
  const filteredData = ref<Certificate[]>([])

  const find = async () => {
    await axios
      .get('/certificates')
      .then((response) => (list.value = response.data))
      .then(() => (filteredData.value = list.value))
      .catch((error) => console.log(error))
  }

  return { find, list, filteredData }
})
