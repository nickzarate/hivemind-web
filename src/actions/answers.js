import { setAnswers } from 'reducers/answers'
import { withdraw, deposit } from 'reducers/answers'

export function resetAnswers() {
  return (dispatch, getState) => {
    const { category } = getState()
    let answers = []
    for (let outcome of category.outcomes) {
      answers.push({
        tokens: outcome.tokens,
        binValues: Array(outcome.numBins).fill(0)
      })
    }
    dispatch(setAnswers(answers))
  }
}

export function useToken(index, i) {
  return (dispatch, getState) => {
    const { answers } = getState()
    if (answers[index].tokens > 0) {
      dispatch(withdraw(index))
      dispatch(deposit(index, i))
    }
  }
}
