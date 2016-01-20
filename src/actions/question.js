import { WITHDRAW, DEPOSIT, SET_CURRENT_QUESTION, ESTIMATE, RESET_BANK } from 'constants'
import { rand } from 'toolbox'

export function withdraw() {
  return {
    type: WITHDRAW
  }
}

export function deposit(index) {
  return {
    type: DEPOSIT,
    payload: {
      index: index
    }
  }
}

export function estimate(pointEstimate) {
  return {
    type: ESTIMATE,
    payload: {
      pointEstimate: pointEstimate
    }
  }
}

export function setCurrentQuestion(question) {
  return {
    type: SET_CURRENT_QUESTION,
    payload: {
      currentQuestion: question
    }
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
 *  Set the pointEstimate state if the new value is a valid estimate
 */
export function handleEstimate(event) {
  return (dispatch) => {
    let pointEstimate = Number(event.target.value)
    //TODO: More robust error checking?
    //TODO: Dispatch error message if its an invalid number
    if (!pointEstimate) {
      return
    }
    dispatch(estimate(pointEstimate))
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
    query.equalTo('type', round.questionInfo.questionType)
    query.equalTo('observationId', observationId)

    //Pull question and set state
    query.first().then(function(parseQuestion) {
      dispatch(setCurrentQuestion(parseQuestion))
    })
  }
}
