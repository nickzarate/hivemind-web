import React from 'react'
import { LinkButton } from 'components/Lib/Buttons'

export default class SurveyInstructions extends React.Component {
  render() {
    return (
      <div>
        <p>{ '(Description of the survey, why we are taking a preliminary survey)' }</p>
        <p>{ 'IRB approval?' }</p>
        <LinkButton to="/signup/1" onClick={ this.props.onClick }>{ 'Continue' }</LinkButton>
      </div>
    )
  }
}
