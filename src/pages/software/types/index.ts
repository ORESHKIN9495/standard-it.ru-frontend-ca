import type { Manufacturer } from '@/pages/manufacturers/types'
import type { Collection } from '@/types'

interface Software {
  id: number
  name: string
  description: string
  status: boolean
  collection: Collection[]
  manufacturers: Manufacturer[]
  image: string
}

export type { Collection, Software }
