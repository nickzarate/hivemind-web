import { INCREMENT_CURRENT_QUESTION, ADD_ESTIMATE, ADD_ANSWERS } from 'constants'

export function incrementCurrentQuestion() {
  return {
    type: INCREMENT_CURRENT_QUESTION
  }
}

export function addEstimate(estimate) {
  return {
    type: ADD_ESTIMATE,
    estimate: estimate
  }
}

/*
 *  Create a new round in Parse and save with:
 *    answers: [],
 *    createdBy: currentUser
 */
export function asyncCreateRound(Parse) {
  return (dispatch, getState) => {
    const { round } = getState()

    //Create new Round
    let roundClass = round.questionType + 'Round'
    var Round = Parse.Object.extend(roundClass)
    var newRound = new Round()

    //Save Round and set currentRound state
    setTimeout(() => {
      newRound.save({
        answers: [],
        createdBy: Parse.User.current()
      }).then(function(savedRound) {
        dispatch(setRound(savedRound))
      })
    }, 3000)
  }
}
