import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Posts } from '../types'

export const usePosts = defineStore('posts', () => {
  const list = ref<Posts[]>([])
  const listOne = ref<Posts>()
  const filteredData = ref<Posts[]>([])

  const find = async () => {
    await axios
      .get('/posts')
      .then((response) => (list.value = response.data))
      .then(() => (filteredData.value = list.value))
      .catch((error) => console.log(error))
  }

  const findOne = async (id: string) => {
    await axios
      .get(`/posts/${id}`)
      .then((response) => {
        listOne.value = response.data

        if (sessionStorage.getItem('id') !== id && listOne.value) {
          sessionStorage.setItem('id', id)

          listOne.value.views++

          update(listOne.value)
        }
      })
      .catch((error) => console.log(error))
  }

  const update = async (data: Posts) => {
    await axios
      .put('/posts', data)
      .then(() => find())
      .catch((error) => console.log(error))
  }

  return { list, listOne, find, findOne, update, filteredData }
})
