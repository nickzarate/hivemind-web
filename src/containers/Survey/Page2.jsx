import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage2 from 'components/Survey/Page2'
import { submitPage2 } from 'actions/survey'
import surveyPage1Selector from 'selectors/survey'

class SurveyPage2Container extends React.Component {
  handleSubmit = () => this.props.actions.submitPage2();

  render() {
    return (
      <SurveyPage2
        onSubmit={ this.handleSubmit }
        survey={ this.props.survey }
      />
    )
  }
}

export default reduxify({
  selector: surveyPage1Selector,
  actions: { submitPage2 },
  container: SurveyPage2Container
})
