const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const formatDate = (timestamp: number) => {
  if (timestamp) {
    let date = new Date(timestamp)
    let month = monthShortNames[date.getUTCMonth() + 1]
    let day = date.getUTCDate()
    let year = date.getUTCFullYear()

    return `${day}. ${month} ${year}`
  }
  return 'Invalid date'
}
