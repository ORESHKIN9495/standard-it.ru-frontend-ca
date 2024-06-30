import type { Manufacturer } from '@/pages/manufacturers/types'

interface Equipment {
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
  image: string
}

export type { Collection, Equipment }
