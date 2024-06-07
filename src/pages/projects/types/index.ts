interface Project {
  id: number
  name: string
  description: string
  content: string
  image: string
  status: boolean
  slide: boolean
  slug: string
  cost: Cost[]
  collection: Collection[]
  views: number
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

interface Collection {
  id: number
  name: string
  description: string
  status: boolean
}

export type { Collection, Cost, Project }
