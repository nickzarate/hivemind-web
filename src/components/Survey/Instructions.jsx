import React from 'react'

export default class SurveyInstructions extends React.Component {
  render() {
    return (
      <div>
        <p>{ '(Description of the survey, why we are taking a preliminary survey)' }</p>
        <p>{ 'IRB approval?' }</p>
        <button onClick={ this.props.onClick }>{ 'Continue' }</button>
      </div>
    )
  }
}
