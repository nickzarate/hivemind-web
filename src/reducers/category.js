import update from 'react-addons-update'
import { createAction } from 'redux-actions'

/* Action Types */
export const SET_CATEGORY = 'category/SET_CATEGORY'

/* Actions */
export const setCategory = createAction(SET_CATEGORY, (category) => ({ category }))

/* Reducer */
const initialState = {
  categorySurveyInstructions: '',
  covariates: [],
  index: 0,
  name: '',
  numObservations: 0,
  outcomes: [],
  questionsPerRound: 0,
  roundInstructions: ''
}
export default function category(state = initialState, action) {
  switch (action.type) {
  case SET_CATEGORY:
    return update(state, {$set: action.payload.category})
  default:
    return state
  }
}
