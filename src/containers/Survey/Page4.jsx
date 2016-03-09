import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage4 from 'components/Survey/Page4'
import { submitPreSurvey } from 'actions/survey'
import surveyPage1Selector from 'selectors/survey'

class SurveyPage4Container extends React.Component {
  handleClick = () => this.props.actions.submitPreSurvey('/signup/4');
  
  render() {
    return (
      <SurveyPage4
        onClick={ this.handleClick }
        survey={ this.props.survey }
      />
    )
  }
}

export default reduxify({
  selector: surveyPage1Selector,
  actions: { submitPreSurvey },
  container: SurveyPage4Container
})
