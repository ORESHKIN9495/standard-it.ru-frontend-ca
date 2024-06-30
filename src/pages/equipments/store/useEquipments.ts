import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Collection, Equipment } from '../types'

export const useEquipments = defineStore('equipments', () => {
  const list = ref<Equipment[]>([])
  const listOne = ref<Equipment>()
  const listCollections = ref<Collection[]>([])

  const find = async () => {
    await axios
      .get('/equipments')
      .then((response) => (list.value = response.data))
      .catch((error) => console.log(error))

    findCollections()
  }

  const findOne = async (id: string) => {
    await axios
      .get(`/equipments/${id}`)
      .then((response) => (listOne.value = response.data))
      .catch((error) => console.log(error))
  }

  const findCollections = async () => {
    await axios
      .get('/collection/equipments')
      .then((response) => (listCollections.value = response.data))
      .catch((error) => console.log(error))
  }

  return { find, findOne, list, listOne, listCollections, findCollections }
})
