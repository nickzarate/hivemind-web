import { INCREMENT_CURRENT_QUESTION, ADD_ANSWER_TO_ROUND, SET_CURRENT_ROUND, SET_CORRECT_ANSWER_INDICES,
  ADD_ANSWERS, RESET_CURRENT_QUESTION, ADD_OUTCOMES, SET_CURRENT_QUESTION, SET_WORTH, ADD_WINNINGS } from './constants'
import { setBinValues, setBank } from './question'
import { resetValues } from './form'
import { actions } from 'react-redux-form'
import { rand } from 'toolbox/misc'
import { createAction } from 'redux-actions'

export const addAnswers = createAction(ADD_ANSWERS, answers => answers)
export const addAnswerToRound = createAction(ADD_ANSWER_TO_ROUND, savedAnswer => savedAnswer)
export const addOutcomes = createAction(ADD_OUTCOMES, outcomes => outcomes)
export const addWinnings = createAction(ADD_WINNINGS, winnings => winnings)
export const incrementCurrentQuestion = createAction(INCREMENT_CURRENT_QUESTION)
export const resetCurrentQuestion = createAction(RESET_CURRENT_QUESTION)
export const setCorrectAnswerIndices = createAction(SET_CORRECT_ANSWER_INDICES, correctAnswerIndices => correctAnswerIndices)
export const setCurrentQuestion = createAction(SET_CURRENT_QUESTION, currentQuestion => currentQuestion)
export const setCurrentRound = createAction(SET_CURRENT_ROUND, currentRound => currentRound)
export const setWorth = createAction(SET_WORTH, worth => worth)

/*
 *  Award the user points according to the correctness of their answer
 */
export function asyncAwardPoints(Parse) {
  return (dispatch, getState) => {
    const { question, round } = getState()
    //TODO: Calculate how many points are earned for answering correctly
    var winnings = 0
    for (let i = 0; i < round.worth.length; i++) {
      winnings += round.correctAnswerIndices[i] === -1 ? 0 : question.binValues[i][round.correctAnswerIndices[i]] * round.worth[i]
    }
    let currentUser = Parse.User.current()
    let points = currentUser.get('points')
    points += winnings
    dispatch(addWinnings(winnings))
    currentUser.save({ points: points })
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
      dispatch(setCurrentRound(savedRound))
    })
  }
}

/*
 *  Create and save a new answer
 *  Save the current round with the new answer
 *  Submit the round if round is complete
 */
export function asyncHandleSubmit(Parse, push) {
  return (dispatch, getState) => {
    const { question, round, forms: { estimates } } = getState()

    var estimatesArray = []
    for (let outcome of round.currentCategory.get('outcomeNames')) {
      estimatesArray.push(estimates[outcome])
    }
    dispatch(actions.reset('estimates'))

    //Save token distribution and outcomes
    dispatch(addAnswers(question.binValues))
    dispatch(addOutcomes(question.currentQuestion.get('outcomes')))

    //Create new answer to save to a round
    let Answer = Parse.Object.extend('Answer')
    let newAnswer = new Answer()

    newAnswer.save({
      question: question.currentQuestion,
      binValues: question.binValues,
      estimates: estimatesArray
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

/*
 *  Initialize the values in question
 */
export function initializeQuestion(numBins, bank) {
  return (dispatch) => {
    let binValues = []
    for (let num of numBins) {
      binValues.push(Array(num).fill(0))
    }
    dispatch(resetValues())
    dispatch(setBank(bank))
    dispatch(setBinValues(binValues))
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
