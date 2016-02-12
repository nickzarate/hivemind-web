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
        { this.renderCovariates() }
        <p>{ this.props.instructions }</p>
      </div>
    )
  }
}
