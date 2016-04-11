import update from 'react-addons-update'
import { createAction } from 'redux-actions'

/* Action Types */
export const ADD_ANSWER_TO_ROUND = 'round/ADD_ANSWER_TO_ROUND'
export const ADD_WINNINGS = 'round/ADD_WINNINGS'
export const CLEAR_WINNINGS = 'round/CLEAR_WINNINGS'
export const INCREMENT_CURRENT_QUESTION = 'round/INCREMENT_CURRENT_QUESTION'
export const RESET_CURRENT_QUESTION = 'round/RESET_CURRENT_QUESTION'
export const SET_CATEGORIES = 'round/SET_CATEGORIES'
export const SET_CURRENT_ROUND = 'round/SET_CURRENT_ROUND'
export const SET_UNLOCKED = 'round/SET_UNLOCKED'
// Saga-only action-types
// export const SUBMIT_QUESTION = 'round/SUBMIT_QUESTION'
// export const FETCH_QUESTIONS = 'round/FETCH_QUESTIONS'

/* Actions */
export const addAnswerToRound = createAction(ADD_ANSWER_TO_ROUND, (answer) => ({ answer }))
export const addWinnings = createAction(ADD_WINNINGS, (winnings) => ({ winnings }))
export const clearWinnings = createAction(CLEAR_WINNINGS)
export const incrementCurrentQuestion = createAction(INCREMENT_CURRENT_QUESTION)
export const resetCurrentQuestion = createAction(RESET_CURRENT_QUESTION)
export const setCategories = createAction(SET_CATEGORIES, (categories) => ({ categories }))
export const setCurrentRound = createAction(SET_CURRENT_ROUND, (currentRound) => ({ currentRound }))
export const setUnlocked = createAction(SET_UNLOCKED, (index) => ({ index }))
// Saga-only actions
// export const submitQuestion = createAction(SUBMIT_QUESTION)
// export const fetchQuestions = createAction(FETCH_QUESTIONS)

/* Reducer */
const initialState = {
  categories: [],
  currentQuestion: 1,
  currentRound: null,
  winnings: 0
}
export default function round(state = initialState, action) {
  switch (action.type) {
  case ADD_ANSWER_TO_ROUND:
    return update(state, {currentRound: {$apply: (currentRound) => currentRound.get('answers').push(action.payload.answer)}})
  case ADD_WINNINGS:
    return update(state, {winnings: {$set: state.winnings + action.payload.winnings}})
  case CLEAR_WINNINGS:
    return update(state, {winnings: {$set: 0}})
  case INCREMENT_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: state.currentQuestion + 1}})
  case RESET_CURRENT_QUESTION:
    return update(state, {currentQuestion: {$set: 1}})
  case SET_CATEGORIES:
    return update(state, {categories: {$set: action.payload.categories}})
  case SET_CURRENT_ROUND:
    return update(state, {currentRound: {$set: action.payload.currentRound}})
  case SET_UNLOCKED:
    return update(state, {categories: {[action.payload.index]: {unlocked: {$set: true}}}})
  default:
    return state
  }
}
