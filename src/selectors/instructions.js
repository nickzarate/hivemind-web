import { createSelector } from 'reselect'

const instructionsSelector = (state) => state.round.currentCategory
const covariateValuesSelector = (state) => state.question.currentQuestion

export default createSelector(
  covariateValuesSelector,
  instructionsSelector,
  (currentQuestion, currentCategory) => {
    return {
      covariateValues: currentQuestion ? currentQuestion.get('covariateValues') : [],
      covariateNames: currentCategory ? currentCategory.get('covariateNames') : [],
      instructions: currentCategory ? currentCategory.get('questionInstructions') : ''
    }
  }
)
