import { createSelector } from 'reselect'
import getBinText from 'selectors/binText'
import getPoints from 'selectors/points'

const getAnswers = (state) => state.answers

export default createSelector(
  getAnswers,
  getBinText,
  getPoints,
  (answers, binText, points) => {
    let realAnswers = answers.slice(0)
    for (let i = 0; i < points.length; i++) {
      Object.assign(realAnswers[i], { points: points[i], binText: binText[i] })
    }
    return realAnswers
  }
)
