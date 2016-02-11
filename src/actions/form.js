import { SET_ERROR_MESSAGE, UPDATE_VALUE, INITIALIZE_DATA } from 'constants'

export function setErrorMessage(errorMessage) {
  return {
    type: SET_ERROR_MESSAGE,
    payload: {
      errorMessage: errorMessage
    }
  }
}

export function updateValue(value, index) {
  return {
    type: UPDATE_VALUE,
    payload: {
      value: value,
      index: index
    }
  }
}

export function initializeData(data) {
  return {
    type: INITIALIZE_DATA,
    payload: {
      data: data
    }
  }
}
