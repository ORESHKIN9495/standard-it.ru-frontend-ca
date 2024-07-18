import type { Manufacturer } from '@/pages/manufacturers/types'

interface Software {
  id: number
  name: string
  description: string
  status: boolean
  collection: Collection[]
  manufacturers: Manufacturer[]
  image: string
}

interface Collection {
  id: number
  name: string
  description: string
  status: boolean
  related: []
  image: string
}

export type { Collection, Software }
