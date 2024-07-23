import type { Service } from '@/pages/services/types'
import type { Collection, Cost } from '@/types'

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
  cost: Cost[]
}

export type { Collection, Solution }
