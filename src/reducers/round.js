import { INCREMENT_CURRENT_QUESTION, INCREMENT_NUM_QUESTIONS, DECREMENT_NUM_QUESTIONS, SET_ROUND, ADD_ANSWER_TO_ROUND,
  SET_QUESTION_TYPE, ADD_POINT_ESTIMATE, ADD_ANSWERS, RESET_CURRENT_QUESTION } from 'constants'
import { defaultQuestionConfig } from 'assets'

const initialState = {
  questionInfo: {
    currentQuestion: 1,
    numQuestions: defaultQuestionConfig.NUM_QUESTIONS_PER_ROUND,
    questionType: defaultQuestionConfig.TYPE
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
        questionType: action.questionType
      },
      responseInfo: state.responseInfo,
      currentRound: state.currentRound
    }
  case ADD_POINT_ESTIMATE:
    let pointEstimateVector = state.responseInfo.pointEstimateVector
    pointEstimateVector.push(action.pointEstimate)
    return {
      questionInfo: state.questionInfo,
      responseInfo: {
        pointEstimateVector: pointEstimateVector,
        answersVector: state.responseInfo.answersVector
      },
      currentRound: state.currentRound
    }
  case ADD_ANSWERS:
    let answersVector = state.responseInfo.answersVector
    answersVector.push(action.answers)
    return {
      questionInfo: state.questionInfo,
      responseInfo: {
        pointEstimateVector: state.responseInfo.pointEstimateVector,
        answersVector: answersVector
      },
      currentRound: state.currentRound
    }
  case SET_ROUND:
    return {
      questionInfo: state.questionInfo,
      responseInfo: state.responseInfo,
      currentRound: action.currentRound
    }
  case ADD_ANSWER_TO_ROUND:
    let currentRound = state.currentRound
    currentRound.get('answers').push(action.answer)
    return {
      questionInfo: state.questionInfo,
      responseInfo: state.responseInfo,
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
      currentRound: state.currentRound
    }
  default:
    return state
  }
}
