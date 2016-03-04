import { INCREMENT_CURRENT_QUESTION, ADD_ANSWER_TO_ROUND, SET_CURRENT_ROUND, SET_CORRECT_ANSWER_INDICES,
  ADD_ANSWERS, RESET_CURRENT_QUESTION, ADD_OUTCOMES, SET_QUESTION, ADD_WINNINGS } from './constants'
import { setBinValues, setBank, setAnswerSubmitted } from './answer'
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
export const setQuestion = createAction(SET_QUESTION, currentQuestion => currentQuestion)
export const setCurrentRound = createAction(SET_CURRENT_ROUND, currentRound => currentRound)

/*
 *  Award the user points according to the correctness of their answer
 */
export function asyncAwardPoints(user, worth) {
  return (dispatch, getState) => {
    const { answer: { binValues }, round : { correctAnswerIndices } } = getState()
    //TODO: Calculate how many points are earned for answering correctly
    var winnings = 0
    for (let i = 0; i < worth.length; i++) {
      winnings += correctAnswerIndices[i] === -1 ? 0 : binValues[i][correctAnswerIndices[i]] * worth[i]
    }
    let points = user.get('points')
    points += winnings
    dispatch(addWinnings(winnings))
    user.save({ points: points })
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
    const { answer, category, round, forms: { estimates }, question: { objectId } } = getState()

    // Create an array of all of the outcomes estimated by the user
    var estimatesArray = []
    for (let outcome of category.outcomeNames) {
      estimatesArray.push(estimates[outcome])
    }
    dispatch(actions.reset('estimates'))

    // Save token distribution and outcomes
    dispatch(addAnswers(answer.binValues))
    dispatch(addOutcomes(answer.outcomes))

    // Create query for the question that the user answered
    var Questions = Parse.Object.extend('Questions')
    var query = new Parse.Query(Questions)

    dispatch(setAnswerSubmitted(true))
    query.get(objectId).then(function(question) {
      // Create new answer to save to a round
      var Answer = Parse.Object.extend('Answer')
      var newAnswer = new Answer()
      return newAnswer.save({
        question: question,
        binValues: answer.binValues,
        estimates: estimatesArray
      })
    }).then(function(savedAnswer) {
      var answers = round.currentRound.get('answers')
      answers.push(savedAnswer)
      return round.currentRound.save({ answers: answers })
    }).then(function() {
      if (round.currentQuestion >= category.questionsPerRound) {
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
    dispatch(setBank(bank))
    dispatch(setBinValues(binValues))
  }
}

/*
 *  Pull a random question from Parse database and setState accordingly
 */
export function pullQuestion(Parse, categoryName) {
  return (dispatch, getState) => {
    const { answer: { submitted } } = getState()

    // If the question currently stored has not been submitted, do not pull a new question
    if (!submitted) {
      return
    }

    //Create query for random question
    let observationId = rand(1, 3010)
    let Question = Parse.Object.extend('Questions')
    let query = new Parse.Query(Question)
    query.equalTo('type', categoryName)
    query.equalTo('observationId', observationId)
    //Pull question and set state
    query.first().then(function(question) {
      var selectedQuestion = {
        covariateValues: question.get('covariateValues'),
        objectId: question.id,
        outcomes: question.get('outcomes')
      }
      dispatch(setAnswerSubmitted(false))
      dispatch(setQuestion(selectedQuestion))
    })
  }
}
