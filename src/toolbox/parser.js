export const toNum = (val) => { if (val !== '') { return +val } }
export const toBool = (val) => {
  if (val === 'true') {
    return true
  } else if (val === 'false') {
    return false
  }
}
