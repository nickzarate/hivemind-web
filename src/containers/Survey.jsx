import React from 'react'
import subscribe from 'selectors/surveySelector'
import Survey from 'components/Survey'

class SurveyContainer extends React.Component {
  render() {
    return (
      <Survey
        actions={ this.props.actions }
        push={ this.props.push }
        survey={ this.props.survey }
      />
    )
  }
}

export default subscribe(SurveyContainer)
