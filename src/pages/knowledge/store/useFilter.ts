import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useKnowledge } from '../store'

const store = useKnowledge()

export const useFilter = defineStore('knowledge-filter', () => {
  const filteredParams = ref({
    collections: 'Выберите категорию'
  })

  const prepare = (data: string, type: string) => {
    if (type === 'collections') {
      filteredParams.value.collections = data
      store.filteredData = store.list.filter((el) => el.collection.some((e) => e.name === data))
    }
  }

  const reset = () => {
    filteredParams.value = {
      collections: 'Выберите категорию'
    }

    store.filteredData = store.list
  }

  return { filteredParams, prepare, reset }
})
