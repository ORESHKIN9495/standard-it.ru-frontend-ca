interface Settings {
  id: number
  name: string
  description: string
  keywords: [string]
  phone: string
  email: string
  theme: string
  address: string
}

interface Form {
  name: string
  email: string
  company: string
  phone: string
  content: string
  uri: string
}

export type { Form, Settings }
