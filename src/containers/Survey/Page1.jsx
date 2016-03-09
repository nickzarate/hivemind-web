import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage1 from 'components/Survey/Page1'
import surveyPage1Selector from 'selectors/survey'

class SurveyPage1Container extends React.Component {
  render() {
    return (
      <SurveyPage1
        survey={ this.props.survey }
      />
    )
  }
}

export default reduxify({
  selector: surveyPage1Selector,
  container: SurveyPage1Container
})
