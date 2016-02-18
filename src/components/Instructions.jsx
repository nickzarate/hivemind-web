import React from 'react'

export default class Instructions extends React.Component {
  renderCovariates() {
    return this.props.covariateValues.map(
      (covariate, index) => (
        <li key={ index }>
          <p>{ this.props.covariateNames[index] }{ ': ' }{ covariate }</p>
        </li>
      )
    )
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderCovariates() }
        </ul>
        <p>{ this.props.instructions }</p>
      </div>
    )
  }
}
