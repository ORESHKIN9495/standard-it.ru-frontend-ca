import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { CardPartner } from '../types'

export const useCardPartners = defineStore('card-partners', () => {
  const list = ref<CardPartner>()

  const find = async () => {
    await axios
      .get('/partner-card')
      .then((response) => (list.value = response.data))
      .catch((error) => console.log(error))
  }

  return { find, list }
})
