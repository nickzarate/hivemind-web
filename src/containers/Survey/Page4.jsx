import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage4 from 'components/Survey/Page4'
import { submitSurvey } from 'actions/survey'
import surveyPage1Selector from 'selectors/survey'

class SurveyPage4Container extends React.Component {
  handleSubmit = () => this.props.actions.submitSurvey();

  render() {
    return (
      <SurveyPage4
        onSubmit={ this.handleSubmit }
        survey={ this.props.survey }
      />
    )
  }
}

export default reduxify({
  selector: surveyPage1Selector,
  actions: { submitSurvey },
  container: SurveyPage4Container
})
