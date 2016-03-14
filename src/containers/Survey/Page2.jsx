import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage2 from 'components/Survey/Page2'
import { submitPage2 } from 'actions/survey'
import surveySelector from 'selectors/survey'

class SurveyPage2Container extends React.Component {
  handleSubmit = () => this.props.actions.submitPage2();

  render() {
    return (
      <SurveyPage2
        onSubmit={ this.handleSubmit }
        survey={ this.props.survey }
        surveyForm={ this.props.surveyForm }
      />
    )
  }
}

export default reduxify({
  selector: surveySelector,
  actions: { submitPage2 },
  container: SurveyPage2Container
})