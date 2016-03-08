import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage2 from 'components/Survey/Page2'
import surveyPage1Selector from 'selectors/surveyPage1'

class SurveyPage2Container extends React.Component {
  handleClick = () => this.props.push('/signup/3');
  
  render() {
    return (
      <SurveyPage2
        onClick={ this.handleClick }
        race={ this.props.race }
      />
    )
  }
}

export default reduxify({
  selector: surveyPage1Selector,
  actions: {},
  container: SurveyPage2Container
})
