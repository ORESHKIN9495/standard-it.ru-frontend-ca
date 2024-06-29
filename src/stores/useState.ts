import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Settings } from '../types'

export const useState = defineStore('state', () => {
  const state = ref(false)
  const settings = ref<Settings>()
  const pending = ref(false)

  const findSettings = async () => {
    await axios
      .get('/settings')
      .then((response) => (settings.value = response.data))
      .catch((error) => console.log(error))
  }

  return { state, settings, findSettings, pending }
})
