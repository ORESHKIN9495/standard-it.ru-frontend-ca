import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Collection, Solution } from '../types'

export const useSolutions = defineStore('solutions', () => {
  const list = ref<Solution[]>([])
  const listOne = ref<Solution>()
  const listCollections = ref<Collection[]>([])
  const filteredData = ref<Solution[]>([])

  const find = async () => {
    await axios
      .get('/solutions')
      .then((response) => (list.value = response.data))
      .then(() => (filteredData.value = list.value))
      .catch((error) => console.log(error))
  }

  const findOne = async (id: string) => {
    await axios
      .get(`/solutions/${id}`)
      .then((response) => (listOne.value = response.data))
      .catch((error) => console.log(error))
  }

  const findCollections = async () => {
    await axios
      .get('/collection/solutions')
      .then((response) => (listCollections.value = response.data))
      .catch((error) => console.log(error))
  }

  return { list, find, findOne, listOne, listCollections, findCollections, filteredData }
})
