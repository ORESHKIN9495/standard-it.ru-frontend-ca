import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useState = defineStore('state', () => {
  const state = ref(false)

  const settings = ref([])

  return { state, settings }
})
