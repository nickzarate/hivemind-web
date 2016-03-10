import React from 'react'
import reduxify from 'store/reduxify'
import SurveyPage1 from 'components/Survey/Page1'
import { submitPage1 } from 'actions/survey'
import surveySelector from 'selectors/survey'
import { actions } from 'react-redux-form'

class SurveyPage1Container extends React.Component {
  handleSubmit = () => this.props.actions.submitPage1();
  handleChangeValue = (val, checked) => this.props.actions.change(`survey.race.${ val }`, !checked);

  render() {
    return (
      <SurveyPage1
        onSubmit={ this.handleSubmit }
        changeValue={ this.handleChangeValue }
        survey={ this.props.survey }
      />
    )
  }
}

export default reduxify({
  selector: surveySelector,
  actions: { submitPage1, change: actions.change },
  container: SurveyPage1Container
})
