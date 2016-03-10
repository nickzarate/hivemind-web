import getDeepSubset from 'toolbox/getDeepSubset'
import typeOf from 'toolbox/typeOf'

export default function configSlicer(paths) {
  switch (typeOf(paths)) {
  case 'void':
    return (state) => state
  case 'string':
    return (state) => getDeepSubset(state, [paths])
  case 'array':
    return (state) => getDeepSubset(state, paths)
  default:
    throw new Error('Invalid paths argument, should be of type String, Array or Void')
  }
}
