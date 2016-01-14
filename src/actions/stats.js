import { SET_LINE_DATA } from 'constants'

export function setLineData(lineData) {
  return {
    type: SET_LINE_DATA,
    payload: {
      lineData: lineData
    }
  }
}

export function analyzeData() {
  return (dispatch, getState) => {
    const { round } = getState()
    //TODO: Make server call to analyze data (round.responseInfo.answersVector &&
    //    : round.responseInfo.estimateVector) and retrieve phi
    let phi = [1.5, 2]
    //TODO: Build an array of x/y pairs, and create lineData
    //TODO: Dispatch setLineData with newly created lineData variable
  }
}
