import { createSelector } from 'reselect'

const categorySelector = (state) => state.round.currentCategory

export default createSelector(
  categorySelector,
  (currentCategory) => {
    return {
      instructions: currentCategory ? currentCategory.get('categorySurveyInstructions') : '',
      covariateNames: currentCategory ? currentCategory.get('covariateNames') : []
    }
  }
)
