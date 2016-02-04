import React from 'react'

export default class Covariates extends React.Component {
  renderCovariates() {
    const { question, currentCategory } = this.props
    if (question.currentQuestion) {
      return question.currentQuestion.get('covariateValues').map(
        (covariate, index) => (
          <li key={ index }>
            <p>{ currentCategory.get('covariateNames')[index] }{ ': ' }{ covariate }</p>
          </li>
        )
      )
    }
  }

  render() {
    return (
      <div>
        { this.renderCovariates() }
      </div>
    )
  }
}
