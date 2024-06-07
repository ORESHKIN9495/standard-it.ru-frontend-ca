import { axios } from '@/commom/axios'
import type { Service } from '@/pages/services/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useServices = defineStore('services', () => {
  const list = ref<Service[]>([])

  const find = async () => {
    await axios
      .get('/services')
      .then((response) => {
        list.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return { list, find }
})
