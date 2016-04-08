import React from 'react'
import connect from 'store/connect'
import SurveyPage2 from 'components/Survey/Page2'
import { submitPage2 } from 'actions/survey'
import surveySelector from 'selectors/survey'

class SurveyPage2Container extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.actions.submitPage2()
  }

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

export default connect({
  selector: surveySelector,
  actions: { submitPage2 }
})(SurveyPage2Container)
