import { WITHDRAW, DEPOSIT, SET_ESTIMATES, SET_BIN_VALUES, SET_BANK } from 'constants'

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
export function handleEstimates(values) {
  return (dispatch) => {
    for (let item of values) {
      item = Number(item)
      //TODO: More robust error checking?
      if (!item) {
        //TODO: dispatch error message
        return
      }
    }
    dispatch(setEstimates(values))
  }
}
