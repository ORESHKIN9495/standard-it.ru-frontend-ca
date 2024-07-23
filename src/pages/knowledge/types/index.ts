import type { Manufacturer } from '@/pages/manufacturers/types'
import type { Collection } from '@/types'

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

export type { Knowledge }
