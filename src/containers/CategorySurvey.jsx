import React from 'react'
import categorySurveySelector from 'selectors/categorySurvey'
import CategorySurvey from 'components/CategorySurvey'
import reduxify from 'toolbox/reduxify'

class CategorySurveyContainer extends React.Component {
  render() {
    return (
      <CategorySurvey
        instructions={ this.props.instructions }
        covariateNames={ this.props.covariateNames }
      />
    )
  }
}

export default reduxify({
  selector: categorySurveySelector,
  container: CategorySurveyContainer
})
