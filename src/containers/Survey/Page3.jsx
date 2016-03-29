import React from 'react'
import connect from 'store/connect'
import SurveyPage3 from 'components/Survey/Page3'
import { submitPage3 } from 'actions/survey'
import surveySelector from 'selectors/survey'

class SurveyPage3Container extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.actions.submitPage3()
  }

  render() {
    return (
      <SurveyPage3
        onSubmit={ this.handleSubmit }
        survey={ this.props.survey }
        surveyForm={ this.props.surveyForm }
      />
    )
  }
}

export default connect({
  selector: surveySelector,
  actions: { submitPage3 }
})(SurveyPage3Container)
