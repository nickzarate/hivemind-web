import React from 'react'
import connect from 'store/connect'
import SurveyPage1 from 'components/Survey/Page1'
import { submitPage1 } from 'actions/survey'
import surveySelector from 'selectors/survey'
import { actions } from 'react-redux-form'

class SurveyPage1Container extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
  }

  handleSubmit() {
    this.props.actions.submitPage1()
  }

  handleCheckChange(val) {
    this.props.actions.change(`forms.survey.race.${ val }`, !this.props.survey.race[val])
  }

  render() {
    return (
      <SurveyPage1
        onSubmit={ this.handleSubmit }
        onCheckChange={ this.handleCheckChange }
        survey={ this.props.survey }
        surveyForm={ this.props.surveyForm }
      />
    )
  }
}

export default connect({
  selector: surveySelector,
  actions: { submitPage1, change: actions.change }
})(SurveyPage1Container)
