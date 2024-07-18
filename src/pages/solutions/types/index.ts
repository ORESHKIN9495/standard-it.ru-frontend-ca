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
  cost: Cost[]
}

interface Collection {
  id: number
  name: string
  description: string
  status: boolean
}

interface Cost {
  id: number
  amount: number
  coef: {
    id: number
    amount: number
  }
  summary: number
  created_at: string
  updated_at: string
}

export type { Collection, Solution }
