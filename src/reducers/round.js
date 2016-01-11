import { INCREMENT_CURRENT_QUESTION, INCREMENT_NUM_QUESTIONS, DECREMENT_NUM_QUESTIONS, SET_ROUND, ADD_ANSWER_TO_ROUND,
  QUESTIONS_PER_ROUND, DEFAULT_QUESTION_TYPE, SET_QUESTION_TYPE, ADD_ESTIMATE, ADD_ANSWERS, IS_SUBMITTING, RESET_CURRENT_QUESTION } from 'constants'

const initialState = {
  currentQuestion: 1,
  numQuestions: QUESTIONS_PER_ROUND,
  questionType: DEFAULT_QUESTION_TYPE,
  estimateVector: [],
  answersVector: [],
  idArray: [],
  isSubmitting: false,
  currentRound: null
}

export default function round(state = initialState, action) {
  switch (action.type) {
  case INCREMENT_CURRENT_QUESTION:
    return {
      currentQuestion: state.currentQuestion + 1,
      numQuestions: state.numQuestions,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector,
      isSubmitting: state.isSubmitting,
      currentRound: state.currentRound
    }
  case INCREMENT_NUM_QUESTIONS:
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions + 1,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector,
      isSubmitting: state.isSubmitting,
      currentRound: state.currentRound
    }
  case DECREMENT_NUM_QUESTIONS:
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions - 1,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector,
      isSubmitting: state.isSubmitting,
      currentRound: state.currentRound
    }
  case SET_QUESTION_TYPE:
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions,
      questionType: action.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector,
      isSubmitting: state.isSubmitting,
      currentRound: state.currentRound
    }
  case ADD_ESTIMATE:
    var estimateVector = state.estimateVector
    estimateVector.push(action.estimate)
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions,
      questionType: state.questionType,
      estimateVector: estimateVector,
      answersVector: state.answersVector,
      isSubmitting: state.isSubmitting,
      currentRound: state.currentRound
    }
  case ADD_ANSWERS:
    var answersVector = state.answersVector
    answersVector.push(action.answers)
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: answersVector,
      isSubmitting: state.isSubmitting,
      currentRound: state.currentRound
    }
  case IS_SUBMITTING:
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector,
      isSubmitting: action.isSubmitting,
      currentRound: state.currentRound
    }
  case SET_ROUND:
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector,
      isSubmitting: state.isSubmitting,
      currentRound: action.currentRound
    }
  case ADD_ANSWER_TO_ROUND:
    var currentRound = state.currentRound
    currentRound.get('answers').push(action.answer)
    return {
      currentQuestion: state.currentQuestion,
      numQuestions: state.numQuestions,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector,
      isSubmitting: state.isSubmitting,
      currentRound: currentRound
    }
  case RESET_CURRENT_QUESTION:
    return {
      currentQuestion: 1,
      numQuestions: state.numQuestions,
      questionType: state.questionType,
      estimateVector: state.estimateVector,
      answersVector: state.answersVector,
      isSubmitting: state.isSubmitting,
      currentRound: state.currentRound
    }
  default:
    return state
  }
}
