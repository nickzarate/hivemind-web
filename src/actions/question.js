import { WITHDRAW, DEPOSIT, SET_CURRENT_QUESTION, SET_POINT_ESTIMATE, SET_BINS, SET_BANK, SET_HAS_ESTIMATED } from 'constants'
import { reset as resetReduxForm } from 'redux-form'
import { rand } from 'toolbox/misc'

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

export function setPointEstimate(pointEstimate) {
  return {
    type: SET_POINT_ESTIMATE,
    payload: {
      pointEstimate: pointEstimate
    }
  }
}

export function setBins(bins) {
  return {
    type: SET_BINS,
    payload: {
      bins: bins
    }
  }
}

export function setBank(bank) {
  return {
    type: SET_BANK,
    payload: {
      bank: bank
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

export function setHasEstimated(hasEstimated) {
  return {
    type: SET_HAS_ESTIMATED,
    payload: {
      hasEstimated: hasEstimated
    }
  }
}

export function resetForm(formName) {
  return resetReduxForm(formName)
}

export function reset(formName) {
  return (dispatch, getState) => {
    const { round } = getState()
    let bins = []
    for (let i = 0; i < round.questionInfo.currentCategory.get('binText').length; i++) {
      bins.push(0)
    }
    dispatch(setBins(bins))
    dispatch(setBank(round.questionInfo.currentCategory.get('tokens')))
    dispatch(setPointEstimate(0))
    dispatch(setHasEstimated(false))
    dispatch(resetForm(formName))
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
export function handlePointEstimate(data) {
  return (dispatch) => {
    data.outcome = Number(data.outcome)
    //TODO: More robust error checking?
    if (!data.outcome) {
      //TODO: dispatch error message
      return
    }
    dispatch(setPointEstimate(data.outcome))
    dispatch(setHasEstimated(true))
  }
}

/*
 *  Pull a random question from Parse database and setState accordingly
 */
export function pullQuestion(Parse) {
  return (dispatch, getState) => {
    const { round } = getState()

    //Create query for random question
    let observationId = rand(1, 3010)
    let Question = Parse.Object.extend('Questions')
    let query = new Parse.Query(Question)
    query.equalTo('type', round.questionInfo.currentCategory.get('name'))
    query.equalTo('observationId', observationId)
    //Pull question and set state
    query.first().then(function(question) {
      dispatch(setCurrentQuestion(question))
    })
  }
}
