import { INCREMENT_CURRENT_QUESTION, SET_ROUND, ADD_ANSWER_TO_ROUND, SET_CURRENT_CATEGORY,
  ADD_ANSWERS, RESET_CURRENT_QUESTION, SET_CATEGORIES, ADD_OUTCOMES, SET_RANGE, SET_RANGES,
  SET_UNLOCKED, SET_WORTH, SET_CORRECT_ANSWER_INDICES, ADD_WINNINGS, CLEAR_WINNINGS } from 'constants'
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
    return update(state, {currentRound: {$apply: (currentRound) => currentRound.get('answers').push(action.answer)}})
  case ADD_ANSWERS:
    return update(state, {answersVector: {$push: [action.answers]}})
  case ADD_OUTCOMES:
    return update(state, {outcomes: {$push: [action.outcomes]}})
  case ADD_WINNINGS:
    return update(state, {winnings: {$set: state.winnings + action.winnings}})
  case CLEAR_WINNINGS:
    return update(state, {winnings: {$set: 0}})
  case INCREMENT_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: state.currentQuestion + 1}})
  case RESET_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: 1}})
  case SET_CATEGORIES:
    return update(state, {categories: {$set: action.categories}})
  case SET_CORRECT_ANSWER_INDICES:
    return update(state, {correctAnswerIndices: {$set: action.correctAnswerIndices}})
  case SET_CURRENT_CATEGORY:
    return update(state, {currentCategory: {$set: action.currentCategory}})
  case SET_RANGE:
    return update(state, {ranges: {[action.index]: {$set: action.range}}})
  case SET_RANGES:
    return update(state, {ranges: {$set: action.ranges}})
  case SET_ROUND:
    return update(state, {currentRound: {$set: action.currentRound}})
  case SET_UNLOCKED:
    return update(state, {unlocked: {[action.index]: {$set: action.unlocked}}})
  case SET_WORTH:
    return update(state, {worth: {$set: action.worth}})
  default:
    return state
  }
}
