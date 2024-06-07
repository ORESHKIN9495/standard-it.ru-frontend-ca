import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoader = defineStore('isLoading', () => {
  const state = ref(false)

  const setLoader = () => (state.value = !state.value)

  return { state, setLoader }
})
