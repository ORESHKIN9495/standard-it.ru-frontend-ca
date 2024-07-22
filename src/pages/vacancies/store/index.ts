import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Vacancy } from '../types'

export const useVacancies = defineStore('vacancies', () => {
  const list = ref<Vacancy[]>([])
  const listOne = ref<Vacancy>()

  const find = async () => {
    await axios
      .get('/vacancies')
      .then((response) => (list.value = response.data))
      .catch((error) => console.log(error))
  }

  const findOne = async (id: string) => {
    await axios
      .get(`/vacancies/${id}`)
      .then((response) => (listOne.value = response.data))
      .catch((error) => console.log(error))
  }

  return { list, listOne, find, findOne }
})
