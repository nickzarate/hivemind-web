import update from 'react-addons-update'
import { createAction } from 'redux-actions'

/* Action Types */
export const ADD_ANSWERS = 'round/ADD_ANSWERS'
export const ADD_ANSWER_TO_ROUND = 'round/ADD_ANSWER_TO_ROUND'
export const ADD_OUTCOMES = 'round/ADD_OUTCOMES'
export const ADD_WINNINGS = 'round/ADD_WINNINGS'
export const CLEAR_WINNINGS = 'round/CLEAR_WINNINGS'
export const INCREMENT_CURRENT_QUESTION = 'round/INCREMENT_CURRENT_QUESTION'
export const RESET_CURRENT_QUESTION = 'round/RESET_CURRENT_QUESTION'
export const SET_CATEGORIES = 'round/SET_CATEGORIES'
export const SET_CORRECT_ANSWER_INDICES = 'round/SET_CORRECT_ANSWER_INDICES'
export const SET_CURRENT_ROUND = 'round/SET_CURRENT_ROUND'
// Saga-only action-types
export const SUBMIT_QUESTION = 'round/SUBMIT_QUESTION'
export const FETCH_QUESTIONS = 'round/FETCH_QUESTIONS'

/* Actions */
export const addAnswers = createAction(ADD_ANSWERS, (answers) => ({ answers }))
export const addAnswerToRound = createAction(ADD_ANSWER_TO_ROUND, (answer) => ({ answer }))
export const addOutcomes = createAction(ADD_OUTCOMES, (outcomes) => ({ outcomes }))
export const addWinnings = createAction(ADD_WINNINGS, (winnings) => ({ winnings }))
export const clearWinnings = createAction(CLEAR_WINNINGS)
export const incrementCurrentQuestion = createAction(INCREMENT_CURRENT_QUESTION)
export const resetCurrentQuestion = createAction(RESET_CURRENT_QUESTION)
export const setCategories = createAction(SET_CATEGORIES, (categories) => ({ categories }))
export const setCorrectAnswerIndices = createAction(SET_CORRECT_ANSWER_INDICES, (correctAnswerIndices) => ({ correctAnswerIndices }))
export const setCurrentRound = createAction(SET_CURRENT_ROUND, (currentRound) => ({ currentRound }))
// Saga-only actions
export const submitQuestion = createAction(SUBMIT_QUESTION)
export const fetchQuestions = createAction(FETCH_QUESTIONS)

// const something = [
//   {
//     bank: 3,
//     binValues: [0,0,0],
//     outcome: 3,
//     answersVector: [0,1,3],
//     correctAnswerIndex: 2
//   }
// ]
// console.log(something)

/* Reducer */
const initialState = {
  answersVector: [],
  categories: [],
  correctAnswerIndices: [],
  currentQuestion: 1,
  currentRound: null,
  outcomes: [],
  winnings: 0
}
export default function round(state = initialState, action) {
  switch (action.type) {
  case ADD_ANSWER_TO_ROUND:
    return update(state, {currentRound: {$apply: (currentRound) => currentRound.get('answers').push(action.payload.answer)}})
  case ADD_ANSWERS:
    return update(state, {answersVector: {$push: [action.payload.answers]}})
  case ADD_OUTCOMES:
    return update(state, {outcomes: {$push: [action.payload.outcomes]}})
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
  case SET_CORRECT_ANSWER_INDICES:
    return update(state, {correctAnswerIndices: {$set: action.payload.correctAnswerIndices}})
  case SET_CURRENT_ROUND:
    return update(state, {currentRound: {$set: action.payload.currentRound}})
  default:
    return state
  }
}
