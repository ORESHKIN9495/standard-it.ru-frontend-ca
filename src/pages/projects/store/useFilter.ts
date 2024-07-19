import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useProjects } from '../store'

const store = useProjects()

export const useFilter = defineStore('projectsFilter', () => {
  const filteredParams = ref({
    services: 'Выберите услугу',
    industry: 'Выберите отрасль'
  })

  const prepare = (data: string, type: string) => {
    if (type === 'services') {
      filteredParams.value.services = data
      filteredParams.value.industry = 'Выберите отрасль'
      store.filteredData = store.list.filter((el) => el.services.some((e) => e.name === data))
    }

    if (type === 'industry') {
      filteredParams.value.industry = data
      filteredParams.value.services = 'Выберите услугу'
      store.filteredData = store.list.filter((el) => el.collection.some((e) => e.name === data))
    }
  }

  const reset = () => {
    filteredParams.value = {
      services: 'Выберите услугу',
      industry: 'Выберите отрасль'
    }

    store.filteredData = store.list
  }

  return { filteredParams, prepare, reset }
})
