import update from 'react-addons-update'
import { createAction } from 'redux-actions'


/* Action Types */
const ADD_ANSWERS = 'round/ADD_ANSWERS'
const ADD_ANSWER_TO_ROUND = 'round/ADD_ANSWER_TO_ROUND'
const ADD_OUTCOMES = 'round/ADD_OUTCOMES'
const ADD_WINNINGS = 'round/ADD_WINNINGS'
const CLEAR_WINNINGS = 'round/CLEAR_WINNINGS'
const INCREMENT_CURRENT_QUESTION = 'round/INCREMENT_CURRENT_QUESTION'
const RESET_CURRENT_QUESTION = 'round/RESET_CURRENT_QUESTION'
const SET_CATEGORY_NAMES = 'round/SET_CATEGORY_NAMES'
const SET_CORRECT_ANSWER_INDICES = 'round/SET_CORRECT_ANSWER_INDICES'
const SET_CURRENT_ROUND = 'round/SET_CURRENT_ROUND'
const SET_RANGE = 'round/SET_RANGE'
const SET_RANGES = 'round/SET_RANGES'
const SET_UNLOCKED = 'round/SET_UNLOCKED'
// Saga-only action-types
const CHOOSE_CATEGORY = 'round/CHOOSE_CATEGORY'


/* Actions */
export const addAnswers = createAction(ADD_ANSWERS, (answers) => { answers })
export const addAnswerToRound = createAction(ADD_ANSWER_TO_ROUND, (answer) => { answer })
export const addOutcomes = createAction(ADD_OUTCOMES, (outcomes) => { outcomes })
export const addWinnings = createAction(ADD_WINNINGS, (winnings) => { winnings })
export const clearWinnings = createAction(CLEAR_WINNINGS)
export const incrementCurrentQuestion = createAction(INCREMENT_CURRENT_QUESTION)
export const resetCurrentQuestion = createAction(RESET_CURRENT_QUESTION)
export const setCategoryNames = createAction(SET_CATEGORY_NAMES, (categoryNames) => { categoryNames })
export const setCorrectAnswerIndices = createAction(SET_CORRECT_ANSWER_INDICES, (correctAnswerIndices) => { correctAnswerIndices })
export const setCurrentRound = createAction(SET_CURRENT_ROUND, (currentRound) => { currentRound })
export const setRange = createAction(SET_RANGE, (range, index) => { range, index })
export const setRanges = createAction(SET_RANGES, (ranges) => { ranges })
export const setUnlocked = createAction(SET_UNLOCKED, (unlocked, index) => { unlocked, index })
// Saga-only actions
export const chooseCategory = createAction(CHOOSE_CATEGORY, (categoryName) => { categoryName })


/* Reducer */
const initialState = {
  answersVector: [],
  categoryNames: [],
  correctAnswerIndices: [],
  currentQuestion: 1,
  currentRound: null,
  outcomes: [],
  ranges: [],
  unlocked: [],
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
  case SET_CATEGORY_NAMES:
    return update(state, {categoryNames: {$set: action.payload.categoryNames}})
  case SET_CORRECT_ANSWER_INDICES:
    return update(state, {correctAnswerIndices: {$set: action.payload.correctAnswerIndices}})
  case SET_CURRENT_ROUND:
    return update(state, {currentRound: {$set: action.payload.currentRound}})
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
