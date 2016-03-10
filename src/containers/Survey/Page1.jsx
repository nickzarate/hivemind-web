import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage1 from 'components/Survey/Page1'
import { submitPage1 } from 'actions/survey'
import surveySelector from 'selectors/survey'
import { actions } from 'react-redux-form'

class SurveyPage1Container extends React.Component {
  handleSubmit = () => this.props.actions.submitPage1();
  changeValue = (val, checked) => this.props.actions.change(`survey.race.${ val }`, !checked);

  render() {
    return (
      <SurveyPage1
        onSubmit={ this.handleSubmit }
        changeValue={ this.changeValue }
        survey={ this.props.survey }
        surveyForm={ this.props.surveyForm }
      />
    )
  }
}

export default reduxify({
  selector: surveySelector,
  actions: { submitPage1, change: actions.change },
  container: SurveyPage1Container
})
