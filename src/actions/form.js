import { SET_ERROR_MESSAGE, UPDATE_VALUE, INITIALIZE_VALUES } from 'constants'

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

export function initializeValues(values) {
  return {
    type: INITIALIZE_VALUES,
    payload: {
      values: values
    }
  }
}
