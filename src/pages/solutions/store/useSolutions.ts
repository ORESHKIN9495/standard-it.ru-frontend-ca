import { axios } from '@/commom/axios'
import type { Solution } from '@/pages/solutions/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSolutions = defineStore('solutions', () => {
  const list = ref<Solution[]>([])

  const find = async () => {
    await axios
      .get('/solutions')
      .then((response) => {
        list.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return { find, list }
})
