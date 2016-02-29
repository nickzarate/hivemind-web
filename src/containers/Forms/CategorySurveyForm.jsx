import React from 'react'
import categorySurveyFormSelector from 'selectors/categorySurveyForm'
import CategorySurveyForm from 'components/Forms/CategorySurveyForm'
import reduxify from 'store/reduxify'

class CategorySurveyFormContainer extends React.Component {
  render() {
    return (
      <CategorySurveyForm
        instructions={ this.props.instructions }
        covariateNames={ this.props.covariateNames }
      />
    )
  }
}

export default reduxify({
  selector: categorySurveyFormSelector,
  container: CategorySurveyFormContainer
})
