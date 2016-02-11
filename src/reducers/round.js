import { INCREMENT_CURRENT_QUESTION, SET_ROUND, ADD_ANSWER_TO_ROUND, SET_CURRENT_CATEGORY,
  ADD_ANSWERS, RESET_CURRENT_QUESTION, SET_CATEGORIES, ADD_OUTCOMES, CLEAR, SHOW_MODAL, SET_RANGE,
  SET_ERROR_MESSAGE } from 'constants'
import update from 'react-addons-update'

const initialState = {
  currentQuestion: 1,
  currentCategory: null,
  answersVector: [],
  outcomes: [],
  currentRound: null,
  categories: null,
  showModal: false,
  range: [],
  errorMessage: null
}

export default function round(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: state.currentQuestion + 1}})
  case SET_CURRENT_CATEGORY:
    return update(state, {currentCategory: {$set: action.payload.currentCategory}})
  case ADD_ANSWERS:
    return update(state, {answersVector: {$push: [action.payload.answers]}})
  case SET_ROUND:
    return update(state, {currentRound: {$set: action.payload.currentRound}})
  case ADD_ANSWER_TO_ROUND:
    let currentRound = state.currentRound
    currentRound.get('answers').push(action.payload.answer)
    return update(state, {currentRound: {$set: currentRound}})
  case RESET_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: 1}})
  case SET_CATEGORIES:
    return update(state, {categories: {$set: action.payload.categories}})
  case ADD_OUTCOMES:
    return update(state, {outcomes: {$push: [action.payload.outcomes]}})
  case SHOW_MODAL:
    return update(state, {showModal: {$set: action.payload.showModal}})
  case SET_RANGE:
    let range = state.range.slice(0)
    range.push(action.payload.min)
    range.push(action.payload.max)
    return update(state, {range: {$set: range}})
  case SET_ERROR_MESSAGE:
    return update(state, {errorMessage: {$set: action.payload.errorMessage}})
  case CLEAR:
    return initialState
  default:
    return state
  }
}
