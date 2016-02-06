import { CLEAR, SET_ERROR_MESSAGE } from 'constants'

export function clear() {
  return {
    type: CLEAR
  }
}

export function setErrorMessage(errorMessage) {
  return {
    type: SET_ERROR_MESSAGE,
    payload: {
      errorMessage: errorMessage
    }
  }
}
