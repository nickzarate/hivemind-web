import { WITHDRAW, DEPOSIT, SET_BIN_VALUES, SET_BANK } from 'constants'
import createAction from './actionCreator'

export const deposit = createAction(DEPOSIT, 'binsIndex', 'index')
export const setBank = createAction(SET_BANK, 'bank')
export const setBinsValues = createAction(SET_BIN_VALUES, 'binValues')
export const withdraw = createAction(WITHDRAW, 'bankIndex')

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
