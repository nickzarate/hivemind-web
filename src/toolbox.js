export function hammer() {
  return 'hammer'
}

export function screwdriver() {
  return 'screwdriver'
}

export function scissors() {
  return 'scissors'
}

export function merge(...args) {
  let obj = {}
  for (let arg of args)
    Object.assign(obj, arg)
  return obj
}
