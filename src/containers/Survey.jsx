import React from 'react'
import * as surveyActions from 'actions/survey'
import reduxify from 'toolbox/reduxify'
import Survey from 'components/Survey'

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
  component: SurveyContainer,
  state: 'survey',
  actions: { surveyActions }
})
