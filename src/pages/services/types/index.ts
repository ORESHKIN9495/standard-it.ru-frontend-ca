import type { Collection, Cost } from '@/types'

interface Service {
  id: number
  name: string
  description: string
  content: string
  image: string
  status: boolean
  slide: boolean
  slug?: string
  cost: Cost[]
  collection: Collection[]
}

export type { Collection, Service }
