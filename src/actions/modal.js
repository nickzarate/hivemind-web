import { SHOW } from 'constants'

export function show(show) {
  return {
    type: SHOW,
    payload: {
      show: show
    }
  }
}
