import React from 'react'
import connect from 'store/connect'
import CategorySurveyForm from 'components/Forms/CategorySurveyForm'
import { actions } from 'react-redux-form'
import { resetTooltip } from 'reducers/tooltip'
import categorySurveyFormSelector from 'selectors/forms/categorySurvey'

class CategorySurveyFormContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.reset('covariates')
    this.props.actions.resetTooltip()
  }

  render() {
    return (
      <CategorySurveyForm
        categorySurveyInstructions={ this.props.categorySurveyInstructions }
        allCovariateNames={ this.props.allCovariateNames }
        allCovariateDataTypes={ this.props.allCovariateDataTypes }
        tooltipMessage={ this.props.tooltipMessage }
        tooltipTarget={ this.props.tooltipTarget }
      />
    )
  }
}

export default connect({
  selector: categorySurveyFormSelector,
  actions: { resetTooltip, reset: actions.reset }
})(CategorySurveyFormContainer)
