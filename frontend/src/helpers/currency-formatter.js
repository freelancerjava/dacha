export const formatPrice = (price, currency = "UZS") => {
  const formatter = new Intl.NumberFormat("uz-UZ", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  })

  return formatter.format(price)
}
