import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Collection, Service } from '../types'

export const useServices = defineStore('services', () => {
  const list = ref<Service[]>([])
  const listOne = ref<Service>()
  const listCollections = ref<Collection[]>([])
  const filteredData = ref<Service[]>([])

  const find = async () => {
    await axios
      .get('/services')
      .then((response) => (list.value = response.data))
      .then(() => (filteredData.value = list.value))
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

  return { list, find, findOne, listOne, listCollections, findCollections, filteredData }
})
