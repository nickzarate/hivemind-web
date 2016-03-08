import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage2 from 'components/Survey/Page2'
import surveyPage1Selector from 'selectors/survey'

class SurveyPage2Container extends React.Component {
  handleClick = () => this.props.push('/signup/3');
  
  render() {
    return (
      <SurveyPage2
        onClick={ this.handleClick }
        survey={ this.props.survey }
      />
    )
  }
}

export default reduxify({
  selector: surveyPage1Selector,
  actions: {},
  container: SurveyPage2Container
})
