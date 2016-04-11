import { addWinnings, setCurrentRound, resetCurrentQuestion, incrementCurrentQuestion } from 'reducers/round'
import { setTooltipMessage, setTooltipTarget } from 'reducers/tooltip'
import { setQuestion } from 'reducers/question'
import { resetAnswers } from 'actions/answers'
import { actions } from 'react-redux-form'
import { rand } from 'utils/misc'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { browserHistory } from 'react-router'

/*
 *  Award the user points according to the correctness of their answer
 */
export function asyncAwardPoints(answers) {
  return (dispatch) => {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    //TODO: Calculate how many points are earned for answering correctly
    let winnings = 0
    for (let answer of answers) {
      winnings += answer.correctAnswerIndex === -1 ? 0 : answer.binValues[answer.correctAnswerIndex] * answer.points
    }
    dispatch(addWinnings(winnings))
    Parse.User.current().save({ points: Parse.User.current().get('points') + winnings })
  }
}

/*
 *  Create a new round in Parse and save with:
 *    answers: [],
 *    createdBy: currentUser
 */
export function saveRound() {
  return (dispatch, getState) => {
    const { category } = getState()
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)

    //Create new Round
    let Round = Parse.Object.extend('Round')
    let newRound = new Round()

    //Save Round and set currentRound state
    newRound.save({
      answers: [],
      createdBy: Parse.User.current(),
      categoryName: category.name
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
export function asyncHandleSubmit(answers) {
  return (dispatch, getState) => {
    const { category, round, forms: { estimates }, question: { objectId } } = getState()
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)

    // Validate estimates
    for (let outcome of category.outcomes) {
      if (isNaN(estimates[outcome.variableName])) {
        dispatch(setTooltipMessage('Make a guess!'))
        dispatch(setTooltipTarget(outcome.variableName))
        console.log('NO SUBMISSION')
        return
      }
    }

    // Award points to the user based on answers
    dispatch(asyncAwardPoints(answers))

    let outcomeAnswers = []
    for (let i = 0; i < answers.length; i++) {
      let estimate = estimates[category.outcomes[i].variableName]
      estimate = typeof estimate === 'string' ? Number(estimate) : estimate
      outcomeAnswers.push({
        estimate,
        name: category.outcomes[i].variableName,
        binValues: answers[i].binValues
      })
    }
    dispatch(actions.reset('forms.estimates'))
    dispatch(resetAnswers())

    // Create query for the question that the user answered
    let Answer = Parse.Object.extend('Answer')
    let newAnswer = new Answer()

    newAnswer.save({
      questionId: objectId, outcomeAnswers
    }).then(function(savedAnswer) {
      let answers = round.currentRound.get('answers')
      answers.push(savedAnswer)
      return round.currentRound.save({ answers })
    }).then(function() {
      if (round.currentQuestion >= category.questionsPerRound) {
        dispatch(resetCurrentQuestion())
        browserHistory.push('/stats')
      } else {
        dispatch(incrementCurrentQuestion())
        dispatch(fetchQuestion())
      }
    })
  }
}

/*
 *  Pull a random question from Parse database and setState accordingly
 */
export function fetchQuestion() {
  return (dispatch, getState) => {
    const { category: { name, covariates, outcomes, numObservations } } = getState()
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)

    // Create query for random question
    let observationId = rand(1, numObservations)
    let Question = Parse.Object.extend(name)
    let query = new Parse.Query(Question)
    query.equalTo('observationId', observationId)

    // Fetch question and set state
    query.first().then(function(question) {
      let selectedQuestion = { objectId: question.id }
      for (let covariate of covariates) {
        Object.assign(selectedQuestion, { [covariate.variableName]: question.get(covariate.variableName) })
      }
      for (let outcome of outcomes) {
        Object.assign(selectedQuestion, { [outcome.variableName]: question.get(outcome.variableName) })
      }
      dispatch(setQuestion(selectedQuestion))
      browserHistory.push('/round/question/' + question.id)
    })
  }
}
