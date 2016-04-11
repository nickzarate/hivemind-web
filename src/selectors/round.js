import { createSelector } from 'reselect'
import getPoints from 'selectors/points'
import getCorrectAnswerIndices from 'selectors/correctAnswerIndices'

const getAnswers = (state) => state.answers

export default createSelector(
  getAnswers,
  getPoints,
  getCorrectAnswerIndices,
  (answers, points, correctAnswerIndices) => {
    let realAnswers = []
    for (let i = 0; i < correctAnswerIndices.length; i++) {
      realAnswers.push({
        binValues: answers[i].binValues,
        points: points[i],
        correctAnswerIndex: correctAnswerIndices[i]
      })
    }
    return { answers: realAnswers }
  }
)
