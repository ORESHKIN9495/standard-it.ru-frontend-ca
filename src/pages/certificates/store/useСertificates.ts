import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Certificate, Collection } from '../types'

export const useСertificates = defineStore('сertificates', () => {
  const list = ref<Certificate[]>([])
  const filteredData = ref<Certificate[]>([])
  const listCollections = ref<Collection[]>([])

  const find = async () => {
    await axios
      .get('/certificates')
      .then((response) => (list.value = response.data))
      .then(() => (filteredData.value = list.value))
      .catch((error) => console.log(error))
  }

  const findCollections = async () => {
    await axios
      .get('/collection/certificates')
      .then((response) => (listCollections.value = response.data))
      .catch((error) => console.log(error))
  }

  return { find, list, filteredData, listCollections, findCollections }
})
