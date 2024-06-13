import type { Manufacturer } from '@/pages/manufacturers/types'

interface Posts {
  id: number
  name: string
  description: string
  content: string
  author: string
  image: string
  manufacturers: Manufacturer[]
  status: boolean
  mailing: boolean
  published: string
  views: number
}

export type { Posts }
