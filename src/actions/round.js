import { INCREMENT_CURRENT_QUESTION, ADD_ANSWER_TO_ROUND, SET_QUESTION_TYPE, SET_ROUND,
  ADD_POINT_ESTIMATE, ADD_ANSWERS, RESET_CURRENT_QUESTION, ADD_COVARIATES } from 'constants'

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

export function addAnswerToRound(savedAnswer) {
  return {
    type: ADD_ANSWER_TO_ROUND,
    payload: {
      answer: savedAnswer
    }
  }
}

export function addPointEstimate(pointEstimate) {
  return {
    type: ADD_POINT_ESTIMATE,
    payload: {
      pointEstimate: pointEstimate
    }
  }
}

export function addAnswers(answers) {
  return {
    type: ADD_ANSWERS,
    payload: {
      answers: answers
    }
  }
}

export function addCovariates(covariates) {
  return {
    type: ADD_COVARIATES,
    payload: {
      covariates: covariates
    }
  }
}

export function incrementCurrentQuestion() {
  return {
    type: INCREMENT_CURRENT_QUESTION
  }
}

export function resetCurrentQuestion() {
  return {
    type: RESET_CURRENT_QUESTION
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

/*
 *  Award the user points according to the correctness of their answer
 */
export function asyncAwardPoints() {
  return (dispatch, getState) => {
    let { question, user } = getState()
    question = question.toJS()
    user = user.toJS()

    //TODO: Calculate how many points are earned for answering correctly
    let points = question.bins[question.currentQuestion.get('correctAnswerIndex')] * 50
    let honey = user.currentUser.get('honey')
    honey += points
    user.currentUser.save({ honey: honey })
  }
}

/*
 *  Create and save a new answer
 *  Save the current round with the new answer
 *  Submit the round if round is complete
 */
export function asyncHandleSubmit(Parse, pushPath) {
  return (dispatch, getState) => {
    let { question, round } = getState()
    question = question.toJS()
    round = round.toJS()

    //Save answers in vectors and
    dispatch(addAnswers(question.bins))
    dispatch(addPointEstimate(question.pointEstimate))
    dispatch(addCovariates(question.currentQuestion.get('covariates')))

    //Create new answer to save to a round
    let Answer = Parse.Object.extend('Answer')
    let newAnswer = new Answer()

    newAnswer.save({
      question: question.currentQuestion,
      bins: question.bins,
      pointEstimate: question.pointEstimate
    }).then(function(savedAnswer) {
      let answers = round.currentRound.get('answers')
      answers.push(savedAnswer)
      return round.currentRound.save({ answers: answers })
    }).then(function() {
      if (round.questionInfo.currentQuestion >= round.questionInfo.numQuestions) {
        dispatch(resetCurrentQuestion())
        pushPath('/stats')
      } else {
        dispatch(incrementCurrentQuestion())
      }
    })
  }
}
