interface Settings {
  id: number
  name: string
  description: string
  keywords: [string]
  phone: string
  email: string
  theme: string
  address: string
}

interface Form {
  name: string
  email: string
  company: string
  phone: string
  content: string
  uri: string
}

interface Collection {
  id: number
  name: string
  description: string
  status: boolean
  related: []
  image: string
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

export type { Collection, Cost, Form, Settings }
