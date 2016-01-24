import { INCREMENT_CURRENT_QUESTION, INCREMENT_NUM_QUESTIONS, DECREMENT_NUM_QUESTIONS,
  SET_ROUND, ADD_ANSWER_TO_ROUND, SET_CURRENT_CATEGORY, ADD_POINT_ESTIMATE, ADD_ANSWERS,
  RESET_CURRENT_QUESTION, ADD_COVARIATES, SET_CATEGORIES, SET_NUM_QUESTIONS } from 'constants'
import { fromJS } from 'immutable'

const initialState = fromJS({
  questionInfo: {
    currentQuestion: 1,
    numQuestions: 1,
    currentCategory: null
  },
  responseInfo: {
    pointEstimateVector: [],
    answersVector: []
  },
  covariates: [],
  currentRound: null,
  categories: null
})

export default function round(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_CURRENT_QUESTION:
    return state.updateIn(['questionInfo', 'currentQuestion'], value => value + 1)
  case INCREMENT_NUM_QUESTIONS:
    return state.updateIn(['questionInfo', 'numQuestions'], value => value + 1)
  case DECREMENT_NUM_QUESTIONS:
    return state.updateIn(['questionInfo', 'numQuestions'], value => value - 1)
  case SET_CURRENT_CATEGORY:
    return state.setIn(['questionInfo', 'currentCategory'], action.payload.currentCategory)
  case ADD_POINT_ESTIMATE:
    return state.updateIn(['responseInfo', 'pointEstimateVector'], list => list.push(action.payload.pointEstimate))
  case ADD_ANSWERS:
    return state.updateIn(['responseInfo', 'answersVector'], list => list.push(action.payload.answers))
  case SET_ROUND:
    return state.set('currentRound', action.payload.currentRound)
  case ADD_ANSWER_TO_ROUND:
    let currentRound = state.currentRound
    currentRound.get('answers').push(action.payload.answer)
    return state.set('currentRound', currentRound)
  case RESET_CURRENT_QUESTION:
    return state.setIn(['questionInfo', 'currentQuestion'], 1)
  case ADD_COVARIATES:
    return state.update('covariates', list => list.push(action.payload.covariates))
  case SET_CATEGORIES:
    return state.set('categories', action.payload.categories)
  case SET_NUM_QUESTIONS:
    return state.setIn(['questionInfo', 'numQuestions'], action.payload.numQuestions)
  default:
    return state
  }
}
