import React from 'react'
import { Link } from 'react-router'

export default class SurveyInstructions extends React.Component {
  render() {
    return (
      <div>
        <p>{ '(Description of the survey, why we are taking a preliminary survey)' }</p>
        <p>{ 'IRB approval?' }</p>
        <Link to="/signup/1"><button onClick={ this.props.onClick }>{ 'Continue' }</button></Link>
      </div>
    )
  }
}
