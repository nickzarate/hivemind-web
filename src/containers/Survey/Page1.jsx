import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage1 from 'components/Survey/Page1'
import surveyPage1Selector from 'selectors/survey'

class SurveyPage1Container extends React.Component {
  handleClick = () => this.props.push('/signup/2');

  render() {
    return (
      <SurveyPage1
        onClick={ this.handleClick }
        survey={ this.props.survey }
      />
    )
  }
}

export default reduxify({
  selector: surveyPage1Selector,
  actions: {},
  container: SurveyPage1Container
})
