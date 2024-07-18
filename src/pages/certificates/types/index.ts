interface Certificate {
  id: number
  name: string
  description: string
  image: string
  status: boolean
  wide: boolean
  collection: Collection[]
}

interface Collection {
  id: number
  name: string
  description: string
  status: boolean
}

export type { Certificate, Collection }
