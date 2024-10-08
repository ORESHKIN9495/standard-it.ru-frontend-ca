import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoader = defineStore('isLoading', () => {
  const state = ref(false)

  const changeStateTrue = () => (state.value = true)
  const changeStateFalse = () => (state.value = false)

  return { state, changeStateTrue, changeStateFalse }
})
