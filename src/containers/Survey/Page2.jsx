import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage2 from 'components/Survey/Page2'
import { submitPage2 } from 'actions/survey'
import surveyFormSelector from 'selectors/surveyForm'

class SurveyPage2Container extends React.Component {
  handleSubmit = () => this.props.actions.submitPage2();

  render() {
    return (
      <SurveyPage2
        onSubmit={ this.handleSubmit }
        surveyForm={ this.props.surveyForm }
      />
    )
  }
}

export default reduxify({
  selector: surveyFormSelector,
  actions: { submitPage2 },
  container: SurveyPage2Container
})
