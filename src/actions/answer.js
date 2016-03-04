import { WITHDRAW, DEPOSIT, SET_BIN_VALUES, SET_BANK, SET_ANSWER_SUBMITTED } from './constants'
import { createAction } from 'redux-actions'

export const deposit = createAction(DEPOSIT, (binsIndex, index) => { return { binsIndex, index } })
export const setAnswerSubmitted = createAction(SET_ANSWER_SUBMITTED, submitted => submitted)
export const setBank = createAction(SET_BANK, bank => bank)
export const setBinValues = createAction(SET_BIN_VALUES, binValues => binValues)
export const withdraw = createAction(WITHDRAW, bankIndex => bankIndex)

/*
 *  If any cubes left, distribute one to the specified index
 */
export function handleDeposit(binsIndex, index) {
  return (dispatch, getState) => {
    const { answer: { bank } } = getState()
    if (bank[binsIndex]) {
      dispatch(withdraw(binsIndex))
      dispatch(deposit(binsIndex, index))
    }
  }
}
