import { fDate } from '@/composables/useDate'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useVacancies } from '../store'

const store = useVacancies()

export const useFilter = defineStore('vacanciesFilter', () => {
  const filteredParams = ref({
    published: 'Датa публикации'
  })

  const getDate = computed(() => [
    ...new Set(store.list.map((el) => fDate(el.published, 'fullDate') as string))
  ])

  const prepare = (data: string, type: string) => {
    if (type === 'published') {
      filteredParams.value.published = data
      store.filteredData = store.list.filter(
        (el) => (fDate(el.published, 'fullDate') as string) === data
      )
    }
  }

  const reset = () => {
    filteredParams.value = {
      published: 'Датa публикации'
    }

    store.filteredData = store.list
  }

  return { filteredParams, prepare, reset, getDate }
})
