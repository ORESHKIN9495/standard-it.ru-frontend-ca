import { axios } from '@/commom/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Project } from '../types'

export const useProjects = defineStore('projects', () => {
  const list = ref<Project[]>([])
  const listOne = ref<Project>()
  const filteredData = ref<Project[]>([])
  const listCollections = ref<Project[]>([])

  const find = async () => {
    await axios
      .get('/projects')
      .then((response) => (list.value = response.data))
      .then(() => (filteredData.value = list.value))
      .catch((error) => console.log(error))
  }

  const findOne = async (id: string) => {
    await axios
      .get(`/projects/${id}`)
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

  const update = async (data: Project) => {
    await axios
      .put('/projects', data)
      .then(() => find())
      .catch((error) => console.log(error))
  }

  const findCollections = async () => {
    await axios
      .get('/collection/projects')
      .then((response) => (listCollections.value = response.data))
      .catch((error) => console.log(error))
  }

  return { list, listOne, find, findOne, update, filteredData, listCollections, findCollections }
})
