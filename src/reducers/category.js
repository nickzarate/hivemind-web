import update from 'react-addons-update'
import { createAction } from 'redux-actions'

/* Action Types */
const SET_CATEGORY = 'category/SET_CATEGORY'

/* Actions */
export const setCategory = createAction(SET_CATEGORY, (category) => { category })

/* Reducer */
const initialState = {
  categorySurveyInstructions: '',
  covariateNames: [],
  covariateRanges: [],
  discrete: [],
  index: 0,
  instructions: '',
  name: '',
  numBins: [],
  outcomeNames: [],
  outcomeRanges: [],
  pointsPerToken: [],
  questionInstructions: [],
  questionsPerRound: 0,
  tokens: []
}
export default function category(state = initialState, action) {
  switch (action.type) {
  case SET_CATEGORY:
    return update(state, {$set: action.payload.category})
  default:
    return state
  }
}
