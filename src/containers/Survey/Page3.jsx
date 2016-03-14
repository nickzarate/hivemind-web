import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage3 from 'components/Survey/Page3'
import { submitPage3 } from 'actions/survey'
import surveySelector from 'selectors/survey'

class SurveyPage3Container extends React.Component {
  handleSubmit = () => this.props.actions.submitPage3();

  render() {
    return (
      <SurveyPage3
        onSubmit={ this.handleSubmit }
        survey={ this.props.survey }
        surveyForm={ this.props.surveyForm }
      />
    )
  }
}

export default reduxify({
  selector: surveySelector,
  actions: { submitPage3 },
  container: SurveyPage3Container
})