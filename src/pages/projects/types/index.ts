import type { Service } from '@/pages/services/types'

interface Project {
  id: number
  name: string
  description: string
  content: string
  image: string
  status: boolean
  views: number
  services: Service[]
  equipments: []
  collection: Collection[]
}

interface Collection {
  id: number
  name: string
  description: string
  status: boolean
}

export type { Collection, Project }
