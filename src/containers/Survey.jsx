import React from 'react'
import surveySelector from 'selectors/survey'
import * as surveyActions from 'actions/survey'
import Survey from 'components/Survey'
import reduxify from 'store/reduxify'

class SurveyContainer extends React.Component {
  render() {
    return (
      <Survey
        actions={ this.props.actions }
        push={ this.props.push }
        survey={ this.props.survey }
      />
    )
  }
}

export default reduxify({
  selector: surveySelector,
  actions: surveyActions,
  container: SurveyContainer
})
