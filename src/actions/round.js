import { SET_QUESTION_TYPE, SET_ROUND } from 'constants'

export function setQuestionType(questionType) {
  return {
    type: SET_QUESTION_TYPE,
    payload: {
      questionType: questionType
    }
  }
}

export function setRound(savedRound) {
  return {
    type: SET_ROUND,
    payload: {
      currentRound: savedRound
    }
  }
}

/*
 *  Create a new round in Parse and save with:
 *    answers: [],
 *    createdBy: currentUser
 */
export function asyncCreateRound(Parse) {
  return (dispatch) => {

    //Create new Round
    let Round = Parse.Object.extend('Round')
    let newRound = new Round()

    //Save Round and set currentRound state
    newRound.save({
      answers: [],
      createdBy: Parse.User.current()
    }).then(function(savedRound) {
      dispatch(setRound(savedRound))
    })
  }
}
