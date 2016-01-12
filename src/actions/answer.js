import { INCREMENT_CURRENT_QUESTION, IS_SUBMITTING, ADD_ANSWER_TO_ROUND,
  ADD_ESTIMATE, ADD_ANSWERS, RESET_CURRENT_QUESTION } from 'constants'

export function isSubmitting(isSubmitting) {
  return {
    type: IS_SUBMITTING,
    isSubmitting: isSubmitting
  }
}

export function addAnswerToRound(savedAnswer) {
  return {
    type: ADD_ANSWER_TO_ROUND,
    answer: savedAnswer
  }
}

export function addEstimate(estimate) {
  return {
    type: ADD_ESTIMATE,
    estimate: estimate
  }
}

export function addAnswers(answers) {
  return {
    type: ADD_ANSWERS,
    answers: answers
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
 *  Award the user points according to the correctness of their answer
 */
export function asyncAwardPoints() {
  return (dispatch, getState) => {
    const { question, user } = getState()
    setTimeout(() => {
      //TODO: Calculate how many points are earned for answering correctly
      let points = question.answers[question.currentQuestion.get('correctAnswerIndex')] * 50
      console.log(user)
      let honey = user.currentUser.get('honey')
      honey += points
      user.currentUser.save({ honey: honey })
    }, 3000)
  }
}

/*
 *  Create and save a new answer
 *  Save the current round with the new answer
 *  Submit the round if round is complete
 */
export function asyncHandleSubmit(Parse, pushPath) {
  return (dispatch, getState) => {
    const { question, round } = getState()

    //Save answers in vectors and 
    dispatch(addAnswers(question.answers))
    dispatch(addEstimate(question.estimate))

    //Create new answer to save to a round
    let Answer = Parse.Object.extend('Answer')
    let newAnswer = new Answer()

    setTimeout(() => {
      newAnswer.save({
        question: question.currentQuestion,
        answers: question.answers,
        estimate: question.estimate
      }).then(function(savedAnswer) {
        console.log('answer saved successfully')
        console.log(savedAnswer)
        let answers = round.currentRound.get('answers')
        answers.push(savedAnswer)
        return round.currentRound.save({ answers: answers })
      }).then(function() {
        dispatch(incrementCurrentQuestion())
        if (round.currentQuestion === round.numQuestions) {
          dispatch(resetCurrentQuestion())
          console.log('GO TO STATS PAGE!!!')
          pushPath('/stats')
        }
      })
    }, 3000)
  }
}
