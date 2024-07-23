import type { Collection } from '@/types'

interface RegulatoryDocumentation {
  id: number
  name: string
  file: string
  status: boolean
  collection: Collection[]
}

export type { Collection, RegulatoryDocumentation }
