export default function merge(...args) {
  let obj = {}
  for (let arg of args)
    Object.assign(obj, arg)
  return obj
}
