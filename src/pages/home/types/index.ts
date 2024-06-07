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

export type { Collection, Cost }
