import type { Collection } from '@/types'

interface Certificate {
  id: number
  name: string
  description: string
  image: string
  status: boolean
  wide: boolean
  collection: Collection[]
}

export type { Certificate, Collection }
