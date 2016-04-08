import React from 'react'
import connect from 'store/connect'
import CategorySurveyForm from 'components/Forms/CategorySurveyForm'
import { actions } from 'react-redux-form'
import categorySurveyFormSelector from 'selectors/forms/categorySurvey'

class CategorySurveyFormContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.reset('covariates')
  }

  render() {
    return (
      <CategorySurveyForm
        categorySurveyInstructions={ this.props.categorySurveyInstructions }
        allCovariateNames={ this.props.allCovariateNames }
        allCovariateDataTypes={ this.props.allCovariateDataTypes }
        tooltip={ this.props.tooltip }
      />
    )
  }
}

export default connect({
  selector: categorySurveyFormSelector,
  actions: { reset: actions.reset }
})(CategorySurveyFormContainer)
