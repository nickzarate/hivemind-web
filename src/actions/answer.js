import { withdraw, deposit } from 'reducers/answer'

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
