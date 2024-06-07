import type { Manufacturer } from '@/pages/manufacturers/types'

interface Equipment {
  id: number
  name: string
  description: string
  status: boolean
  collection: Collection[]
  manufacturer: Manufacturer[]
}

interface Collection {
  id: number
  name: string
  description: string
  status: boolean
  image: string
}

export type { Equipment }
