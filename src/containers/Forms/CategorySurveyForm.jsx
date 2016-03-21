import React from 'react'
import connect from 'store/connect'
import CategorySurveyForm from 'components/Forms/CategorySurveyForm'
import { actions } from 'react-redux-form'
import { resetTooltip } from 'actions/tooltip'
import categorySurveyFormSelector from 'selectors/forms/categorySurvey'

class CategorySurveyFormContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.reset('covariates')
    this.props.actions.resetTooltip()
  }

  render() {
    return (
      <CategorySurveyForm
        instructions={ this.props.instructions }
        covariateNames={ this.props.covariateNames }
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
