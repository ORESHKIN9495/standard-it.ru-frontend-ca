interface DateParams {
  year: string
  month: string
  day: string
  timezone: string
  hour?: string
  minute?: string
}

const fDate = (timestamp: string) => {
  const params: DateParams = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC'
    // hour: 'numeric',
    // minute: 'numeric'
  }

  return new Date(timestamp).toLocaleString('ru', params as any)
}

export { fDate }
