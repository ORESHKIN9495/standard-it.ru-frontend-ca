import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Client } from '../types'

export const useClients = defineStore('clients', () => {
  const list = ref<Client[]>([])

  const find = async () => {
    await axios
      .get('/partner-card')
      .then((response) => {
        list.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return { find, list }
})
