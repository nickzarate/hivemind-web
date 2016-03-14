import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage4 from 'components/Survey/Page4'
import { submitSurvey } from 'actions/survey'
import surveySelector from 'selectors/survey'
import { actions } from 'react-redux-form'

class SurveyPage4Container extends React.Component {
  handleSubmit = () => this.props.actions.submitSurvey();
  handleCheckChange = (val) => this.props.actions.change(`forms.survey.${ val }`, !this.props.survey[val]);

  render() {
    return (
      <SurveyPage4
        onSubmit={ this.handleSubmit }
        survey={ this.props.survey }
        surveyForm={ this.props.surveyForm }
        onCheckChange={ this.handleCheckChange }
      />
    )
  }
}

export default reduxify({
  selector: surveySelector,
  actions: { submitSurvey, change: actions.change },
  container: SurveyPage4Container
})
