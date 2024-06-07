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

export type { Service }
