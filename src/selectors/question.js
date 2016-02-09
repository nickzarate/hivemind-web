import { createSelector } from 'reselect'

const questionSelector = (state) => state.question
const categorySelector = (state) => state.round.currentCategory

export default createSelector(
  questionSelector,
  categorySelector,
  (question, currentCategory) => {
    let outcomeNames = null
    if (currentCategory) {
      outcomeNames = currentCategory.get('outcomeNames')
    }
    return {
      question,
      outcomeNames
    }
  }
)
