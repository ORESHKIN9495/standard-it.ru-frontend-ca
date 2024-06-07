import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Knowledge } from '../types'

export const useKnowledge = defineStore('knowledge', () => {
  const list = ref<Knowledge[]>([])
  const listOne = ref<Knowledge>()

  const find = async () => {
    await axios
      .get('/knowledge')
      .then((response) => (list.value = response.data))
      .catch((error) => console.log(error))
  }

  const findOne = async (id: string) => {
    await axios
      .get(`/knowledge/${id}`)
      .then((response) => {
        listOne.value = response.data

        if (sessionStorage.getItem('id') !== id && listOne.value) {
          sessionStorage.setItem('id', id)

          listOne.value.views++

          update(listOne.value)
        }
      })
      .catch((error) => console.log(error))
  }

  const update = async (data: Knowledge) => {
    await axios
      .put('/knowledge', data)
      .then(() => find())
      .catch((error) => console.log(error))
  }

  return { list, listOne, find, findOne, update }
})
