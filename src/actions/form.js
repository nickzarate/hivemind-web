import { SET_ERROR_MESSAGE, SET_VALUE, INITIALIZE_VALUES, CLEAR_VALUES,
  CLEAR_ERRORS, INITIALIZE_ERROR_MESSAGE, SET_VALUES } from 'constants'

export function setErrorMessage(errorMessage, formIndex) {
  return {
    type: SET_ERROR_MESSAGE,
    payload: {
      errorMessage: errorMessage,
      formIndex: formIndex
    }
  }
}

export function setValue(value, formIndex, index) {
  return {
    type: SET_VALUE,
    payload: {
      value: value,
      formIndex: formIndex,
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

export function initializeErrorMessage(errorMessage) {
  return {
    type: INITIALIZE_ERROR_MESSAGE,
    payload: {
      errorMessage: errorMessage
    }
  }
}

export function clearValues() {
  return {
    type: CLEAR_VALUES
  }
}

export function clearErrors() {
  return {
    type: CLEAR_ERRORS
  }
}

export function setValues(values) {
  return {
    type: SET_VALUES,
    payload: {
      values: values
    }
  }
}

export function resetValues() {
  return (dispatch, getState) => {
    const { form } = getState()
    let values = []
    for (let value of form.values) {
      values.push(Array(value.length).fill(''))
    }
    dispatch(setValues(values))
  }
}

export function initializeForm(values) {
  return (dispatch) => {
    dispatch(initializeValues(values))
    dispatch(initializeErrorMessage(null))
  }
}
