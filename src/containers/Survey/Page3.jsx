import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage3 from 'components/Survey/Page3'
import surveyPage1Selector from 'selectors/survey'

class SurveyPage3Container extends React.Component {
  render() {
    return (
      <SurveyPage3 survey={ this.props.survey } />
    )
  }
}

export default reduxify({
  selector: surveyPage1Selector,
  container: SurveyPage3Container
})
