import type { Manufacturer } from '@/pages/manufacturers/types'
import type { Collection } from '@/types'

interface Equipment {
  id: number
  name: string
  description: string
  status: boolean
  collection: Collection[]
  manufacturers: Manufacturer[]
}

export type { Collection, Equipment }
