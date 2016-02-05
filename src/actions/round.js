import { INCREMENT_CURRENT_QUESTION, ADD_ANSWER_TO_ROUND, SET_ROUND, ADD_POINT_ESTIMATE,
  ADD_ANSWERS, RESET_CURRENT_QUESTION, ADD_COVARIATES, SET_NUM_QUESTIONS, ADD_OUTCOMES } from 'constants'

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

export function addOutcomes(outcomes) {
  return {
    type: ADD_OUTCOMES,
    payload: {
      outcomes: outcomes
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

export function setNumQuestions(numQuestions) {
  return {
    type: SET_NUM_QUESTIONS,
    payload: {
      numQuestions: numQuestions
    }
  }
}

export function getNumQuestions() {
  return (dispatch, getState) => {
    const { round } = getState()
    dispatch(setNumQuestions(round.questionInfo.currentCategory.get('questionsPerRound')))
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
export function asyncAwardPoints(Parse) {
  return (dispatch, getState) => {
    const { question } = getState()

    //TODO: Calculate how many points are earned for answering correctly
    let points = question.bins[question.currentQuestion.get('correctAnswerIndex')] * 50
    let currentUser = Parse.User.current()
    let honey = currentUser.get('honey')
    honey += points
    currentUser.save({ honey: honey })
  }
}

/*
 *  Create and save a new answer
 *  Save the current round with the new answer
 *  Submit the round if round is complete
 */
export function asyncHandleSubmit(Parse, push) {
  return (dispatch, getState) => {
    const { question, round } = getState()

    //Save answers and covariates in vectors
    dispatch(addAnswers(question.bins))
    dispatch(addPointEstimate(question.pointEstimate))
    dispatch(addCovariates(question.currentQuestion.get('covariateValues')))
    dispatch(addOutcomes(question.currentQuestion.get('outcomes')))

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
      if (round.questionInfo.currentQuestion >= round.numQuestions) {
        dispatch(resetCurrentQuestion())
        push('/stats')
      } else {
        dispatch(incrementCurrentQuestion())
      }
    })
  }
}
