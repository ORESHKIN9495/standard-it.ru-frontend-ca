import type { Manufacturer } from '@/pages/manufacturers/types'

interface Software {
  id: number
  name: string
  description: string
  status: boolean
  collection: Collection[]
  manufacturers: Manufacturer[]
}

interface Collection {
  id: number
  name: string
  description: string
  status: boolean
  related: null
}

export type { Collection, Software }
