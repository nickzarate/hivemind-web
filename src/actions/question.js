import { WITHDRAW, DEPOSIT, SET_BIN_VALUES, SET_BANK } from 'constants'

export function withdraw(bankIndex) {
  return {
    type: WITHDRAW,
    payload: {
      bankIndex: bankIndex
    }
  }
}

export function deposit(binsIndex, index) {
  return {
    type: DEPOSIT,
    payload: {
      binsIndex: binsIndex,
      index: index
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
export function handleDeposit(binsIndex, index) {
  return (dispatch, getState) => {
    const { question } = getState()
    if (question.bank[binsIndex]) {
      dispatch(withdraw(binsIndex))
      dispatch(deposit(binsIndex, index))
    }
  }
}
