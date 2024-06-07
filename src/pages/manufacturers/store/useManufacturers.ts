import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Manufacturer } from '../types'

export const useManufacturers = defineStore('manufacturers', () => {
  const list = ref<Manufacturer[]>([])
  const listOne = ref<Manufacturer>()

  const find = async () => {
    await axios
      .get('/manufacturers')
      .then((response) => {
        list.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const findOne = async (id: string) => {
    await axios
      .get(`/manufacturers/${id}`)
      .then((response) => (listOne.value = response.data))
      .catch((error) => {
        console.log(error)
      })
  }

  return { list, find, findOne, listOne }
})
