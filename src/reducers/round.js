import { INCREMENT_CURRENT_QUESTION, INCREMENT_NUM_QUESTIONS, DECREMENT_NUM_QUESTIONS,
  SET_ROUND, ADD_ANSWER_TO_ROUND, SET_CURRENT_CATEGORY, ADD_POINT_ESTIMATE, ADD_ANSWERS,
  RESET_CURRENT_QUESTION, ADD_COVARIATES, SET_CATEGORIES, SET_NUM_QUESTIONS } from 'constants'
import update from 'react-addons-update'

const initialState = {
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
}

export default function round(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_CURRENT_QUESTION:
    return update(state, {questionInfo: {currentQuestion: {$set: state.questionInfo.currentQuestion + 1}}})
  case INCREMENT_NUM_QUESTIONS:
    return update(state, {questionInfo: {numQuestions: {$set: state.questionInfo.numQuestions + 1}}})
  case DECREMENT_NUM_QUESTIONS:
    return update(state, {questionInfo: {numQuestions: {$set: state.questionInfo.numQuestions - 1}}})
  case SET_CURRENT_CATEGORY:
    return update(state, {questionInfo: {currentCategory: {$set: action.payload.currentCategory}}})
  case ADD_POINT_ESTIMATE:
    return update(state, {responseInfo: {pointEstimateVector: {$push: [action.payload.pointEstimate]}}})
  case ADD_ANSWERS:
    return update(state, {responseInfo: {answersVector: {$push: [action.payload.answersVector]}}})
  case SET_ROUND:
    return update(state, {currentRound: {$set: action.payload.currentRound}})
  case ADD_ANSWER_TO_ROUND:
    let currentRound = state.currentRound
    currentRound.get('answers').push(action.payload.answer)
    return update(state, {currentRound: {$set: currentRound}})
  case RESET_CURRENT_QUESTION:
    return update(state, {questionInfo: {currentQuestion: {$set: 1}}})
  case ADD_COVARIATES:
    return update(state, {covariates: {$push: [action.payload.covariates]}})
  case SET_CATEGORIES:
    return update(state, {categories: {$set: action.payload.categories}})
  case SET_NUM_QUESTIONS:
    return update(state, {questionInfo: {numQuestions: {$set: action.payload.numQuestions}}})
  default:
    return state
  }
}
