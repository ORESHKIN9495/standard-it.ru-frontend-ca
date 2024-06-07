interface RegulatoryDocumentation {
  id: number
  name: string
  file: string
  status: boolean
  collection: Collection[]
}

interface Collection {
  id: number
  name: string
  description: string
  status: boolean
}

export type { RegulatoryDocumentation }
