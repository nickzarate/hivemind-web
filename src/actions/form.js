import { SET_ERROR_MESSAGE, SET_VALUE, INITIALIZE_VALUES, CLEAR_VALUES,
  CLEAR_ERRORS, INITIALIZE_ERROR_MESSAGE, SET_VALUES } from 'constants'
import createAction from './actionCreator'

export const setErrorMessage = createAction(SET_ERROR_MESSAGE, 'errorMessage', 'formIndex')
export const setValue = createAction(SET_VALUE, 'value', 'formIndex', 'index')
export const initializeValues = createAction(INITIALIZE_VALUES, 'values')
export const initializeErrorMessage = createAction(INITIALIZE_ERROR_MESSAGE, 'errorMessage')
export const clearValues = createAction(CLEAR_VALUES)
export const clearErrors = createAction(CLEAR_ERRORS)
export const setValues = createAction(SET_VALUES, 'values')

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
