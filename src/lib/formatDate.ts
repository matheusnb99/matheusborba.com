export const formatDate = (date: Date | undefined) => {
  if (!date) {
    return ""
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
  }).format(date)
}
