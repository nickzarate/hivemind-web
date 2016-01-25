import { INCREMENT_CURRENT_QUESTION, INCREMENT_NUM_QUESTIONS, DECREMENT_NUM_QUESTIONS, SET_ROUND, ADD_ANSWER_TO_ROUND,
  SET_QUESTION_TYPE, ADD_POINT_ESTIMATE, ADD_ANSWERS, RESET_CURRENT_QUESTION, ADD_COVARIATES } from 'constants'
import default_question_config from 'assets/default_question_config.json'
import update from 'react-addons-update'

const initialState = {
  questionInfo: {
    currentQuestion: 1,
    numQuestions: default_question_config.NUM_QUESTIONS_PER_ROUND,
    questionType: default_question_config.TYPE
  },
  responseInfo: {
    pointEstimateVector: [],
    answersVector: []
  },
  covariates: [],
  currentRound: null
}

export default function round(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_CURRENT_QUESTION:
    return update(state, {questionInfo: {currentQuestion: {$set: state.questionInfo.currentQuestion + 1}}})
  case INCREMENT_NUM_QUESTIONS:
    return update(state, {questionInfo: {numQuestions: {$set: state.questionInfo.numQuestions + 1}}})//state.updateIn(['questionInfo', 'numQuestions'], value => value + 1)
  case DECREMENT_NUM_QUESTIONS:
    return update(state, {questionInfo: {numQuestions: {$set: state.questionInfo.numQuestions - 1}}})//state.updateIn(['questionInfo', 'numQuestions'], value => value - 1)
  case SET_QUESTION_TYPE:
    return update(state, {questionInfo: {questionType: {$set: action.payload.questionType}}})//state.setIn(['questionInfo', 'questionType'], action.payload.questionType)
  case ADD_POINT_ESTIMATE:
    return update(state, {responseInfo: {pointEstimateVector: {$push: [action.payload.pointEstimate]}}})//state.updateIn(['responseInfo', 'pointEstimateVector'], list => list.push(action.payload.pointEstimate))
  case ADD_ANSWERS:
    return update(state, {responseInfo: {answersVector: {$push: [action.payload.answersVector]}}})//state.updateIn(['responseInfo', 'answersVector'], list => list.push(action.payload.answers))
  case SET_ROUND:
    return update(state, {currentRound: {$set: action.payload.currentRound}})
  case ADD_ANSWER_TO_ROUND:
    let currentRound = state.currentRound
    currentRound.get('answers').push(action.payload.answer)
    return update(state, {currentRound: {$set: currentRound}})
  case RESET_CURRENT_QUESTION:
    return update(state, {questionInfo: {currentQuestion: {$set: 1}}})//state.setIn(['questionInfo', 'currentQuestion'], 1)
  case ADD_COVARIATES:
    return update(state, {covariates: {$push: [action.payload.covariates]}})//state.update('covariates', list => list.push(action.payload.covariates))
  default:
    return state
  }
}
