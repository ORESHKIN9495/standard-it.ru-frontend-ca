import { axios } from '@/commom/axios'
import type { Collection, Software } from '@/pages/software/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSoftwareManufacturers = defineStore('softwareManufacturers', () => {
  const list = ref<Software[]>([])
  const listOne = ref<Software>()
  const listCollections = ref<Collection[]>([])

  const find = async () => {
    await axios
      .get('/software')
      .then((response) => (list.value = response.data))
      .catch((error) => console.log(error))

    findCollections()
  }

  const findOne = async (id: string) => {
    await axios
      .get(`/software/${id}`)
      .then((response) => (listOne.value = response.data))
      .catch((error) => console.log(error))
  }

  const findCollections = async () => {
    await axios
      .get('/collection/software')
      .then((response) => (listCollections.value = response.data))
      .catch((error) => console.log(error))
  }

  return { find, findOne, list, listOne, listCollections, findCollections }
})
