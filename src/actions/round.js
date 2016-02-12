import { INCREMENT_CURRENT_QUESTION, ADD_ANSWER_TO_ROUND, SET_ROUND,
  ADD_ANSWERS, RESET_CURRENT_QUESTION, ADD_OUTCOMES, SET_CURRENT_QUESTION } from 'constants'
import { setBinValues, setBank } from './question'
import { initializeValues } from './form'
import { rand } from 'toolbox/misc'

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

export function addAnswers(answers) {
  return {
    type: ADD_ANSWERS,
    payload: {
      answers: answers
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

export function setCurrentQuestion(question) {
  return {
    type: SET_CURRENT_QUESTION,
    payload: {
      currentQuestion: question
    }
  }
}

/*
 *  Pull a random question from Parse database and setState accordingly
 */
export function pullQuestion(Parse, categoryName) {
  return (dispatch) => {
    //Create query for random question
    let observationId = rand(1, 3010)
    let Question = Parse.Object.extend('Questions')
    let query = new Parse.Query(Question)
    query.equalTo('type', categoryName)
    query.equalTo('observationId', observationId)
    //Pull question and set state
    query.first().then(function(question) {
      dispatch(setCurrentQuestion(question))
    })
  }
}

/*
 *  Initialize the values in question
 */
export function initializeQuestion(numBins, numOutcomes, bank) {
  return (dispatch) => {
    dispatch(setBinValues(Array(numBins).fill(0)))
    dispatch(initializeValues(Array(numOutcomes).fill('')))
    dispatch(setBank(bank))
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
    let points = question.binValues[question.currentQuestion.get('correctAnswerIndex')] * 50
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

    //Save token distribution and outcomes
    dispatch(addAnswers(question.binValues))
    dispatch(addOutcomes(question.currentQuestion.get('outcomes')))

    //Create new answer to save to a round
    let Answer = Parse.Object.extend('Answer')
    let newAnswer = new Answer()

    newAnswer.save({
      question: question.currentQuestion,
      binValues: question.binValues,
      estimates: question.estimates
    }).then(function(savedAnswer) {
      let answers = round.currentRound.get('answers')
      answers.push(savedAnswer)
      return round.currentRound.save({ answers: answers })
    }).then(function() {
      if (round.currentQuestion >= round.currentCategory.get('questionsPerRound')) {
        dispatch(resetCurrentQuestion())
        push('/stats')
      } else {
        dispatch(incrementCurrentQuestion())
      }
    })
  }
}
