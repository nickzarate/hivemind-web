import { INCREMENT_CURRENT_QUESTION, INCREMENT_NUM_QUESTIONS, DECREMENT_NUM_QUESTIONS,
  QUESTIONS_PER_ROUND, DEFAULT_QUESTION_TYPE, SET_QUESTION_TYPE, ADD_ESTIMATE, ADD_ANSWERS } from 'constants'

const initialState = {
  currentQuestion: 1,
  numQuestions: QUESTIONS_PER_ROUND,
  questionType: DEFAULT_QUESTION_TYPE,
  estimateVector: [],
  answersVector: [],
  idArray: []
}

export default function round(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_CURRENT_QUESTION:
    return {
      currentQuestion: state.currentQuestion + 1,
      numQuestions: state.numQuestions,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector
    }
  case INCREMENT_NUM_QUESTIONS:
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions + 1,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector
    }
  case DECREMENT_NUM_QUESTIONS:
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions - 1,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector
    }
  case SET_QUESTION_TYPE:
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions,
      questionType: action.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector
    }
  case ADD_ESTIMATE:
    var estimateVector = state.estimateVector
    estimateVector.push(action.estimate)
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions,
      questionType: state.questionType,
      estimateVector: estimateVector,
      answersVector: state.answersVector
    }
  case ADD_ANSWERS:
    var answersVector = state.answersVector
    answersVector.push(action.answers)
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: answersVector
    }
  default:
    return state
  }
}
