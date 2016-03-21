import update from 'react-addons-update'
import { createAction } from 'redux-actions'

/* Action Types */
export const SET_QUESTION = 'question/SET_QUESTION'

/* Actions */
export const setQuestion = createAction(SET_QUESTION, currentQuestion => ({ currentQuestion }))

/* Reducer */
const initialState = {
  covariateValues: [],
  objectId: '',
  outcomes: []
}
export default function question(state = initialState, action) {
  switch (action.type) {
  case SET_QUESTION:
    return update(state, {$set: action.payload.currentQuestion})
  default:
    return state
  }
}
