import { INCREMENT_CURRENT_QUESTION, INCREMENT_NUM_QUESTIONS, DECREMENT_NUM_QUESTIONS, SET_ROUND, ADD_ANSWER_TO_ROUND,
  SET_QUESTION_TYPE, ADD_POINT_ESTIMATE, ADD_ANSWERS, RESET_CURRENT_QUESTION, ADD_COVARIATES } from 'constants'
import default_question_config from 'assets/default_question_config.json'
import { merge } from 'toolbox'

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
  currentRound: null
}

export default function round(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_CURRENT_QUESTION:
    return {
      questionInfo: {
        currentQuestion: state.questionInfo.currentQuestion + 1,
        numQuestions: state.questionInfo.numQuestions,
        questionType: state.questionInfo.questionType
      },
      responseInfo: state.responseInfo,
      currentRound: state.currentRound
    }
  case INCREMENT_NUM_QUESTIONS:
    return {
      questionInfo: {
        currentQuestion: state.questionInfo.currentQuestion,
        numQuestions: state.questionInfo.numQuestions + 1,
        questionType: state.questionInfo.questionType
      },
      responseInfo: state.responseInfo,
      currentRound: state.currentRound
    }
  case DECREMENT_NUM_QUESTIONS:
    return {
      questionInfo: {
        currentQuestion: state.questionInfo.currentQuestion,
        numQuestions: state.questionInfo.numQuestions - 1,
        questionType: state.questionInfo.questionType
      },
      responseInfo: state.responseInfo,
      currentRound: state.currentRound
    }
  case SET_QUESTION_TYPE:
    return {
      questionInfo: {
        currentQuestion: state.questionInfo.currentQuestion,
        numQuestions: state.questionInfo.numQuestions,
        questionType: action.payload.questionType
      },
      responseInfo: state.responseInfo,
      currentRound: state.currentRound
    }
  case ADD_POINT_ESTIMATE:
    let pointEstimateVector = state.responseInfo.pointEstimateVector
    pointEstimateVector.push(action.payload.pointEstimate)
    return {
      questionInfo: state.questionInfo,
      responseInfo: {
        pointEstimateVector: pointEstimateVector,
        answersVector: state.responseInfo.answersVector
      },
      covariates: state.covariates,
      currentRound: state.currentRound
    }
  case ADD_ANSWERS:
    let answersVector = state.responseInfo.answersVector
    answersVector.push(action.payload.answers)
    return {
      questionInfo: state.questionInfo,
      responseInfo: {
        pointEstimateVector: state.responseInfo.pointEstimateVector,
        answersVector: answersVector
      },
      covariates: state.covariates,
      currentRound: state.currentRound
    }
  case SET_ROUND:
    return {
      questionInfo: state.questionInfo,
      responseInfo: state.responseInfo,
      covariates: state.covariates,
      currentRound: action.payload.currentRound
    }
  case ADD_ANSWER_TO_ROUND:
    let currentRound = state.currentRound
    currentRound.get('answers').push(action.payload.answer)
    return {
      questionInfo: state.questionInfo,
      responseInfo: state.responseInfo,
      covariates: state.covariates,
      currentRound: currentRound
    }
  case RESET_CURRENT_QUESTION:
    return {
      questionInfo: {
        currentQuestion: 1,
        numQuestions: state.questionInfo.numQuestions,
        questionType: state.questionInfo.questionType
      },
      responseInfo: state.responseInfo,
      covariates: state.covariates,
      currentRound: state.currentRound
    }
  case ADD_COVARIATES:
    let covariates = state.covariates.slice(0)
    covariates.push(action.payload.covariates)
    return {
      questionInfo: state.questionInfo,
      responseInfo: state.responseInfo,
      covariates: covariates,
      currentRound: state.currentRound
    }
  default:
    return state
  }
}
