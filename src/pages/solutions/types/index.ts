import type { Collection } from '@/pages/home/types'

interface Solution {
  id: number
  name: string
  description: string
  content: string
  image: string
  file: string
  status: boolean
  slide: boolean
  slug: string
  services: []
  collection: Collection[]
}

export type { Solution }
