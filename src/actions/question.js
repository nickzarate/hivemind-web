import { WITHDRAW, DEPOSIT, SET_ABSTRACT_QUESTION, SET_CURRENT_QUESTION, ESTIMATE, RESET_BANK } from 'constants'
import { rand } from 'toolbox'

export function withdraw() {
  return {
    type: WITHDRAW
  }
}

export function deposit(index) {
  return {
    type: DEPOSIT,
    index: index
  }
}

export function estimate(estimate) {
  return {
    type: ESTIMATE,
    estimate: estimate
  }
}

export function setAbstractQuestion(question) {
  return {
    type: SET_ABSTRACT_QUESTION,
    x1: question.x1,
    x2: question.x2,
    observationId: question.observationId,
    answerText: question.answerText,
    correctAnswer: question.correctAnswer
  }
}

export function setCurrentQuestion(question) {
  return {
    type: SET_CURRENT_QUESTION,
    currentQuestion: question
  }
}

export function resetBank() {
  return {
    type: RESET_BANK
  }
}

/*
 *  If any cubes left, distribute one to the specified index
 */
export function handleDeposit(index) {
  return (dispatch, getState) => {
    const { question } = getState()
    if (question.bank) {
      dispatch(withdraw())
      dispatch(deposit(index))
    }
  }
}

/*
 *  Set the estimate state if the new value is a valid estimate
 */
export function handleEstimate(event) {
  return (dispatch) => {
    let estimateNum = Number(event.target.value)
    //TODO: More robust error checking?
    if (isNaN(estimateNum)) {
      return
    }
    dispatch(estimate(estimateNum))
  }
}

/*
 *  Pull a random question from Parse database and setState accordingly
 */
export function pullQuestion(Parse) {
  return (dispatch, getState) => {
    const { round } = getState()

    //Create query for random question
    let observationId = rand(1, 10)
    let Question = Parse.Object.extend('Question')
    let query = new Parse.Query(Question)
    query.equalTo('type', round.questionType)
    query.equalTo('observationId', observationId)

    //Pull question and set state
    setTimeout(() => {
      query.first().then(function(parseQuestion) {
        dispatch(setCurrentQuestion(parseQuestion))
      })
    }, 3000)
  }
}
