import { WITHDRAW, DEPOSIT, SET_ABSTRACT_QUESTION, SET_CURRENT_QUESTION, ESTIMATE, RESET_BANK } from 'constants'
import { rand } from 'toolbox'

export function withdraw() {
  return {
    type: WITHDRAW
  }
}

export function deposit(index) {
  return {
    type: DEPOSIT,
    index: index
  }
}

export function estimate(estimate) {
  return {
    type: ESTIMATE,
    estimate: estimate
  }
}

export function setAbstractQuestion(question) {
  return {
    type: SET_ABSTRACT_QUESTION,
    x1: question.x1,
    x2: question.x2,
    observationID: question.observationID,
    answerText: question.answerText,
    correctAnswer: question.correctAnswer
  }
}

export function setCurrentQuestion(question) {
  return {
    type: SET_CURRENT_QUESTION,
    currentQuestion: question
  }
}

export function resetBank() {
  return {
    type: RESET_BANK
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
 *  Set the estimate state if the new value is a valid estimate
 */
export function handleEstimate(event) {
  return (dispatch) => {
    let estimateNum = Number(event.target.value)
    //TODO: More robust error checking?
    if (isNaN(estimateNum)) {
      return
    }
    dispatch(estimate(estimateNum))
  }
}

/*
 *  Pull a random question from Parse database and setState accordingly
 */
export function pullQuestion(Parse, questionType) {
  return dispatch => {

    //Create query for random question
    var observationID = rand(1, 100)
    console.log(questionType)
    var Question = Parse.Object.extend(questionType)
    var query = new Parse.Query(Question)
    query.equalTo('observationID', observationID)

    //Pull question and set state
    setTimeout(() => {
      query.first().then(function(parseQuestion) {
        var abstractQuestion = null
        switch(questionType) {
        case 'EducationQuestion':
          abstractQuestion = {
            x1: parseQuestion.get('yearsExperience'),
            x2: parseQuestion.get('yearsEducation'),
            observationID: observationID,
            answerText: parseQuestion.get('answers'),
            correctAnswer: parseQuestion.get('answer')
          }
          break
        default:
          abstractQuestion = null
        }
        dispatch(setAbstractQuestion(abstractQuestion))
        dispatch(setCurrentQuestion(parseQuestion))
      })
    }, 3000)
  }
}
