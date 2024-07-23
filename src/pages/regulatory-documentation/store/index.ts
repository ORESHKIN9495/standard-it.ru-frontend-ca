import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Collection, RegulatoryDocumentation } from '../types'

export const useRegulatoryDocumentation = defineStore('regulatory-documentation', () => {
  const list = ref<RegulatoryDocumentation[]>([])
  const filteredData = ref<RegulatoryDocumentation[]>([])
  const listCollections = ref<Collection[]>([])

  const find = async () => {
    await axios
      .get('/regulatory-documentation')
      .then((response) => (list.value = response.data))
      .then(() => (filteredData.value = list.value))
      .catch((error) => console.log(error))
  }

  const findCollections = async () => {
    await axios
      .get('/collection/regulatory-documentation')
      .then((response) => (listCollections.value = response.data))
      .catch((error) => console.log(error))
  }

  return { find, list, listCollections, findCollections, filteredData }
})
