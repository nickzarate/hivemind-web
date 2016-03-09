import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage1 from 'components/Survey/Page1'
import { submitPage1 } from 'actions/survey'
import surveyPage1Selector from 'selectors/survey'

class SurveyPage1Container extends React.Component {
  handleSubmit = () => this.props.actions.submitPage1();

  render() {
    return (
      <SurveyPage1
        onSubmit={ this.handleSubmit }
        survey={ this.props.survey }
      />
    )
  }
}

export default reduxify({
  selector: surveyPage1Selector,
  actions: { submitPage1 },
  container: SurveyPage1Container
})
