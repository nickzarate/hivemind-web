import { createSelector } from 'reselect'

const questionSelector = (state) => state.question

export default createSelector(
  questionSelector,
  (question) => ({
    question
  })
)
