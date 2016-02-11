import { WITHDRAW, DEPOSIT, SET_CURRENT_QUESTION, SET_ESTIMATES, SET_BIN_VALUES, SET_BANK } from 'constants'
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

export function setEstimates(estimates) {
  return {
    type: SET_ESTIMATES,
    payload: {
      estimates: estimates
    }
  }
}

export function setBinValues(binValues) {
  return {
    type: SET_BIN_VALUES,
    payload: {
      binValues: binValues
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

/*
 *  Reset the bins, estimates, and bank to their initial values.
 */
export function reset(bank) {
  return (dispatch, getState) => {
    const { question } = getState()
    let binValues = Array(question.binValues.length).fill(0)
    let estimates = Array(question.estimates.length).fill(0)
    dispatch(setBinValues(binValues))
    dispatch(setBank(bank))
    dispatch(setEstimates(estimates))
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
 *  Set the estimates state if the new value is a valid estimate
 */
export function handleEstimates(data) {
  return (dispatch) => {
    for (let item of data) {
      item = Number(item)
      //TODO: More robust error checking?
      if (!item) {
        //TODO: dispatch error message
        return
      }
    }
    dispatch(setEstimates(data))
  }
}

/*
 *  Pull a random question from Parse database and setState accordingly
 */
export function pullQuestion(Parse, categoryType) {
  return (dispatch) => {
    //Create query for random question
    let observationId = rand(1, 3010)
    let Question = Parse.Object.extend('Questions')
    let query = new Parse.Query(Question)
    query.equalTo('type', categoryType)
    query.equalTo('observationId', observationId)
    //Pull question and set state
    query.first().then(function(question) {
      dispatch(setCurrentQuestion(question))
    })
  }
}
