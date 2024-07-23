import type { Equipment } from '@/pages/equipments/types'
import type { Service } from '@/pages/services/types'
import type { Collection } from '@/types'

interface Project {
  id: number
  name: string
  description: string
  content: string
  image: string
  status: boolean
  views: number
  services: Service[]
  equipments: Equipment[]
  collection: Collection[]
}

export type { Collection, Project }
