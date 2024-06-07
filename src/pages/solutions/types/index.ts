import type { Service } from '@/pages/services/types'

interface Solution {
  id: number
  name: string
  description: string
  content: string
  image: string
  file: string
  status: boolean
  slide: boolean
  slug?: string
  services: Service[]
  collection: Collection[]
}

interface Collection {
  id: number
  name: string
  description: string
  status: boolean
}

export type { Collection, Solution }
