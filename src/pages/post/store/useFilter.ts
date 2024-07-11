import { fDate } from '@/composables/useDate'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { usePosts } from '../store/usePosts'

const store = usePosts()

export const useFilter = defineStore('postsFilter', () => {
  const state = ref(false)

  const date = ref([
    { id: 1, month: 'январь' },
    { id: 2, month: 'февраль' },
    { id: 3, month: 'март' },
    { id: 4, month: 'апрель' },
    { id: 5, month: 'май' },
    { id: 6, month: 'июнь' },
    { id: 7, month: 'июль' },
    { id: 8, month: 'август' },
    { id: 9, month: 'сентябрь' },
    { id: 10, month: 'октябрь' },
    { id: 11, month: 'ноябрь' },
    { id: 12, month: 'декабрь' }
  ])

  const filteredParams = ref({
    month: 'Выберите месяц',
    year: 'Выберите год',
    manufacturer: 'Выберите производителя'
  })

  const getYars = computed(() => [
    ...new Set(store.list.map((el) => fDate(el.published, 'year') as string))
  ])

  const prepare = (data: string, type: string) => {
    if (type === 'month') {
      filteredParams.value.month = data
      store.filteredData = store.list.filter(
        (el) => fDate(el.published, 'month') === date.value.filter((e) => e.month === data)[0].id
      )
    }

    if (type === 'year') {
      filteredParams.value.year = data
      store.filteredData = store.list.filter((el) => fDate(el.published, 'year') === data)
    }

    if (type === 'manufacturer') {
      filteredParams.value.manufacturer = data
      store.filteredData = store.list.filter((el) => el.manufacturers.some((e) => e.name === data))
    }

    if (
      filteredParams.value.manufacturer !== 'Выберите производителя' &&
      filteredParams.value.year !== 'Выберите год' &&
      filteredParams.value.month !== 'Выберите месяц'
    ) {
      store.filteredData = store.list
        .filter((el) => el.manufacturers.some((e) => e.name === filteredParams.value.manufacturer))
        .filter((el) => fDate(el.published, 'year') === filteredParams.value.year)
        .filter(
          (el) =>
            fDate(el.published, 'month') ===
            date.value.filter((e) => e.month === filteredParams.value.month)[0].id
        )
    }

    if (
      filteredParams.value.manufacturer === 'Выберите производителя' &&
      filteredParams.value.year !== 'Выберите год' &&
      filteredParams.value.month !== 'Выберите месяц'
    ) {
      store.filteredData = store.list
        .filter((el) => fDate(el.published, 'year') === filteredParams.value.year)
        .filter(
          (el) =>
            fDate(el.published, 'month') ===
            date.value.filter((e) => e.month === filteredParams.value.month)[0].id
        )
    }

    if (
      filteredParams.value.manufacturer !== 'Выберите производителя' &&
      filteredParams.value.year === 'Выберите год' &&
      filteredParams.value.month !== 'Выберите месяц'
    ) {
      store.filteredData = store.list
        .filter((el) => el.manufacturers.some((e) => e.name === filteredParams.value.manufacturer))
        .filter(
          (el) =>
            fDate(el.published, 'month') ===
            date.value.filter((e) => e.month === filteredParams.value.month)[0].id
        )
    }

    if (
      filteredParams.value.manufacturer !== 'Выберите производителя' &&
      filteredParams.value.year !== 'Выберите год' &&
      filteredParams.value.month === 'Выберите месяц'
    ) {
      store.filteredData = store.list
        .filter((el) => el.manufacturers.some((e) => e.name === filteredParams.value.manufacturer))
        .filter((el) => fDate(el.published, 'year') === filteredParams.value.year)
    }
  }

  const reset = () => {
    filteredParams.value = {
      month: 'Выберите месяц',
      year: 'Выберите год',
      manufacturer: 'Выберите производителя'
    }

    store.filteredData = store.list
  }

  return { date, filteredParams, prepare, getYars, reset, state }
})
