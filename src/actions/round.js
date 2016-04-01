import { addWinnings, setCurrentRound, addAnswers, addOutcomes,
  resetCurrentQuestion, incrementCurrentQuestion } from 'reducers/round'
import { setBank, setBinValues } from 'reducers/answer'
import { setTooltipMessage, setTooltipTarget } from 'reducers/tooltip'
import { setQuestion } from 'reducers/question'
import { actions } from 'react-redux-form'
import { rand } from 'toolbox/misc'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { browserHistory } from 'react-router'

/*
 *  Award the user points according to the correctness of their answer
 */
export function asyncAwardPoints(worth) {
  return (dispatch, getState) => {
    const { answer: { binValues }, round : { correctAnswerIndices } } = getState()
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    //TODO: Calculate how many points are earned for answering correctly
    let winnings = 0
    for (let i = 0; i < worth.length; i++) {
      winnings += correctAnswerIndices[i] === -1 ? 0 : binValues[i][correctAnswerIndices[i]] * worth[i]
    }
    let points = Parse.User.current().get('points')
    points += winnings
    dispatch(addWinnings(winnings))
    Parse.User.current().save({ points: points })
  }
}

/*
 *  Create a new round in Parse and save with:
 *    answers: [],
 *    createdBy: currentUser
 */
export function saveRound() {
  return (dispatch) => {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)

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
export function asyncHandleSubmit(worth) {
  return (dispatch, getState) => {
    const { answer, category, round, forms: { estimates }, question: { objectId } } = getState()
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)

    // Validate estimates
    for (let outcomeName of category.outcomeNames) {
      if (isNaN(estimates[outcomeName])) {
        dispatch(setTooltipMessage('Make a guess!'))
        dispatch(setTooltipTarget(outcomeName))
        return
      }
    }

    // Create an array of all of the outcomes estimated by the user
    let estimatesArray = []
    for (let outcome of category.outcomeNames) {
      estimatesArray.push(typeof estimates[outcome] === 'string' ? Number(estimates[outcome]) : estimates[outcome])
    }
    dispatch(actions.reset('forms.estimates'))

    // Save token distribution and outcomes
    dispatch(addAnswers(answer.binValues))
    dispatch(addOutcomes(answer.outcomes))
    dispatch(asyncAwardPoints(worth))

    // Create query for the question that the user answered
    let Questions = Parse.Object.extend('Questions')
    let query = new Parse.Query(Questions)

    query.get(objectId).then(function(question) {
      // Create new answer to save to a round
      let Answer = Parse.Object.extend('Answer')
      let newAnswer = new Answer()
      return newAnswer.save({
        question: question,
        binValues: answer.binValues,
        estimates: estimatesArray
      })
    }).then(function(savedAnswer) {
      let answers = round.currentRound.get('answers')
      answers.push(savedAnswer)
      return round.currentRound.save({ answers: answers })
    }).then(function() {
      if (round.currentQuestion >= category.questionsPerRound) {
        dispatch(resetCurrentQuestion())
        browserHistory.push('/stats')
      } else {
        dispatch(incrementCurrentQuestion())
        dispatch(fetchQuestion(category.name))
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
export function fetchQuestion(categoryName) {
  return (dispatch, getState) => {
    const { category: { outcomesToDisplay, covariatesToDisplay, numObservations } } = getState()
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)

    //Create query for random question
    let observationId = rand(1, numObservations)
    let Question = Parse.Object.extend('Questions')
    let query = new Parse.Query(Question)
    query.equalTo('type', categoryName)
    query.equalTo('observationId', observationId)
    //Pull question and set state
    query.first().then(function(question) {
      let covariateValues = [], outcomeValues = []
      for (let index of covariatesToDisplay) {
        covariateValues.push(question.get('covariateValues')[index])
      }
      for (let index of outcomesToDisplay) {
        outcomeValues.push(question.get('outcomeValues')[index])
      }
      let selectedQuestion = {
        covariateValues,
        objectId: question.id,
        outcomeValues
      }
      dispatch(setQuestion(selectedQuestion))
      browserHistory.push('/round/question/' + question.id)
    })
  }
}
