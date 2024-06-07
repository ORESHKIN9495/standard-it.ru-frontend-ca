import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RegulatoryDocumentation } from '../types'

export const useRegulatoryDocumentation = defineStore('regulatory-documentation', () => {
  const list = ref<RegulatoryDocumentation[]>([])

  const find = async () => {
    await axios
      .get('/posts')
      .then((response) => (list.value = response.data))
      .catch((error) => console.log(error))
  }

  return { find, list }
})
