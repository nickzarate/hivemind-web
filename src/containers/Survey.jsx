import React from 'react'
import * as surveyActions from 'actions/survey'
import { reduxify } from 'toolbox'
import SurveyComp from 'components/Survey'

class Survey extends React.Component {
  render() {
    return (
      <SurveyComp
        actions={ this.props.actions }
        pushPath={ this.props.pushPath }
        survey={ this.props.survey }
      />
    )
  }
}

export default reduxify({
  component: Survey,
  reducer: 'survey',
  actions: surveyActions
})
