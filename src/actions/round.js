import { SET_QUESTION_TYPE, SET_ROUND } from 'constants'

export function setQuestionType(questionType) {
  return {
    type: SET_QUESTION_TYPE,
    questionType: questionType
  }
}

export function setRound(savedRound) {
  return {
    type: SET_ROUND,
    currentRound: savedRound
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
