import type { Manufacturer } from '@/pages/manufacturers/types'

interface Knowledge {
  id: number
  name: string
  description: string
  content: string
  author: string
  image: string
  file: string
  manufacturers: Manufacturer[]
  status: boolean
  published: string
  views: number
  collection: Collection[]
}

interface Collection {
  id: number
  name: string
  description: string
  status: boolean
}

export type { Knowledge }
