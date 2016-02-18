import { INCREMENT_CURRENT_QUESTION, SET_ROUND, ADD_ANSWER_TO_ROUND, SET_CURRENT_CATEGORY,
  ADD_ANSWERS, RESET_CURRENT_QUESTION, SET_CATEGORIES, ADD_OUTCOMES, SET_RANGE, SET_RANGES,
  SET_UNLOCKED } from 'constants'
import update from 'react-addons-update'

const initialState = {
  currentQuestion: 1,
  currentCategory: null,
  answersVector: [],
  outcomes: [],
  currentRound: null,
  categories: null,
  ranges: [],
  unlocked: []
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
  case SET_RANGE:
    return update(state, {ranges: {[action.payload.index]: {$set: action.payload.range}}})
  case SET_RANGES:
    return update(state, {ranges: {$set: action.payload.ranges}})
  case SET_UNLOCKED:
    return update(state, {unlocked: {[action.payload.index]: {$set: action.payload.unlocked}}})
  default:
    return state
  }
}
