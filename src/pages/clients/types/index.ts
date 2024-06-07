import type { Solution } from '@/pages/solutions/types'

interface Client {
  id: number
  name: string
  description: string
  content: string
  solutions: Solution[]
  image: string
  status: boolean
  published: string
  link: string
}

export type { Client }
