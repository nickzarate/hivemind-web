import { SET_CATEGORY } from 'actions/constants'
import update from 'react-addons-update'

const initialState = {
  categorySurveyInstructions: '',
  covariateNames: [],
  covariateRanges: [],
  outcomeDataTypes: [],
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
