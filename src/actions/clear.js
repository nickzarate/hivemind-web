import { CLEAR, CLEAR_ERROR } from 'constants'

export function clear() {
  return {
    type: CLEAR
  }
}

export function clearError() {
  return {
    type: CLEAR_ERROR
  }
}
