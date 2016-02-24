import { INCREMENT_CURRENT_QUESTION, SET_CURRENT_ROUND, ADD_ANSWER_TO_ROUND, SET_CURRENT_CATEGORY,
  ADD_ANSWERS, RESET_CURRENT_QUESTION, SET_CATEGORIES, ADD_OUTCOMES, SET_RANGE, SET_RANGES,
  SET_UNLOCKED, SET_WORTH, SET_CORRECT_ANSWER_INDICES, ADD_WINNINGS, CLEAR_WINNINGS } from 'actions/constants'
import update from 'react-addons-update'

const initialState = {
  answersVector: [],
  categories: null,
  correctAnswerIndices: [],
  currentCategory: null,
  currentQuestion: 1,
  currentRound: null,
  outcomes: [],
  ranges: [],
  unlocked: [],
  winnings: 0,
  worth: []
}

export default function round(state = initialState, action) {
  switch (action.type) {
  case ADD_ANSWER_TO_ROUND:
    return update(state, {currentRound: {$apply: (currentRound) => currentRound.get('answers').push(action.payload)}})
  case ADD_ANSWERS:
    return update(state, {answersVector: {$push: [action.payload]}})
  case ADD_OUTCOMES:
    return update(state, {outcomes: {$push: [action.payload]}})
  case ADD_WINNINGS:
    return update(state, {winnings: {$set: state.winnings + action.payload}})
  case CLEAR_WINNINGS:
    return update(state, {winnings: {$set: 0}})
  case INCREMENT_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: state.currentQuestion + 1}})
  case RESET_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: 1}})
  case SET_CATEGORIES:
    return update(state, {categories: {$set: action.payload}})
  case SET_CORRECT_ANSWER_INDICES:
    return update(state, {correctAnswerIndices: {$set: action.payload}})
  case SET_CURRENT_CATEGORY:
    return update(state, {currentCategory: {$set: action.payload}})
  case SET_CURRENT_ROUND:
    return update(state, {currentRound: {$set: action.payload}})
  case SET_RANGE:
    return update(state, {ranges: {[action.payload.index]: {$set: action.payload.range}}})
  case SET_RANGES:
    return update(state, {ranges: {$set: action.payload}})
  case SET_UNLOCKED:
    return update(state, {unlocked: {[action.payload.index]: {$set: action.payload.unlocked}}})
  case SET_WORTH:
    return update(state, {worth: {$set: action.payload}})
  default:
    return state
  }
}
