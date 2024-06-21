interface DateParams {
  year: string
  month: string
  day: string
  timezone: string
}

const params: DateParams = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC'
}

const fDate = (timestamp: string, param: string) => {
  if (param === 'fullDate') return new Date(timestamp).toLocaleString('ru', params as any)
  if (param === 'month') return new Date(timestamp).getMonth() + 1
  if (param === 'year') return +new Date(timestamp).getFullYear()
}

export { fDate }
