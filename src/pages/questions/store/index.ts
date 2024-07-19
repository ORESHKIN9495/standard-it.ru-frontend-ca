import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Question } from '../types'

export const useQuestions = defineStore('questions', () => {
  const list = ref<Question[]>([])

  const find = async () => {
    await axios
      .get('/questions')
      .then((response) => (list.value = response.data))
      .catch((error) => console.log(error))
  }

  return { list, find }
})
