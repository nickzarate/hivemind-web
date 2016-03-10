/**
 * @description
 * getSubset returns an object with the same structure as the original object passed in,
 * but contains only the specified keys and only if that key has a truth-y value.
 *
 * @param {Object} obj The object from which to create a subset.
 * @param {String[]} paths An array of (top-level) keys that should be included in the subset.
 *
 * @return {Object} An object that contains the specified keys with truth-y values
 */
export default function getDeepSubset(obj, paths) {
  console.log('get deep subset!')
  let subset = {}

  paths.forEach((key) => {
    let dots = []
    for (let i = 0; i < key.length; i++) {
      if (key[i] === '.') dots.push(i)
    }

    if (dots.length === 0) {

      let slice = obj[key]
      if (slice) subset[key] = slice

    } else {

      let error = false
      let prev = 0
      let slice = Object.assign({}, obj)
      let subKey = ''
      let subPaths = []

      for (let j = 0; j < dots.length + 1; j++) {
        subKey = key.substring(prev, j === dots.length ? key.length : dots[j])
        console.log(slice)
        console.log(subKey)
        slice = Object.assign({}, slice[subKey])
        console.log(slice)
        if (slice === 'undefined') {
          error = true
          break
        }
        subPaths.push(subKey)
        prev = dots[j] + 1
      }

      if (!error) {
        let bigKey = subset
        for (let k = 0; k < subPaths.length; k++) {
          bigKey[subPaths[k]] = {}
          bigKey = bigKey[subPaths[k]]
        }
        console.log(subset)
        console.log(obj)
        // subset[subKey] = slice
      }
    }
  })

  return subset
}
