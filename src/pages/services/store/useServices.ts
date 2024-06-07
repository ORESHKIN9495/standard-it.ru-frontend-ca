import { axios } from '@/commom/axios'
import type { Collection, Service } from '@/pages/services/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useServices = defineStore('services', () => {
  const list = ref<Service[]>([])
  const listOne = ref<Service>()
  const listCollections = ref<Collection[]>([])

  const find = async () => {
    await axios
      .get('/services')
      .then((response) => (list.value = response.data))
      .catch((error) => console.log(error))
  }

  const findOne = async (id: string) => {
    await axios
      .get(`/services/${id}`)
      .then((response) => (listOne.value = response.data))
      .catch((error) => console.log(error))
  }

  const findCollections = async () => {
    await axios
      .get('/collection/services')
      .then((response) => (listCollections.value = response.data))
      .catch((error) => console.log(error))
  }

  return { list, find, findOne, listOne, listCollections, findCollections }
})
