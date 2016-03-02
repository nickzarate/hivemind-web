import React from 'react'
import reduxify from 'store/reduxify'
import CategorySurveyForm from 'components/Forms/CategorySurveyForm'
import { actions } from 'react-redux-form'
import { resetTooltip } from 'actions/tooltip'
import categorySurveyFormSelector from 'selectors/categorySurveyForm'

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

export default reduxify({
  selector: categorySurveyFormSelector,
  actions: { resetTooltip, reset: actions.reset },
  container: CategorySurveyFormContainer
})
