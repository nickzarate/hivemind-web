import React from 'react'

export default class Instructions extends React.Component {
  render() {
    return (
      <ul>
        { this.props.covariates.map(
          (covariate, index) => (
            <li key={ index }>
              <p>{ covariate.displayName }{ ': ' }{ covariate.value }</p>
            </li>
          )
        ) }
      </ul>
    )
  }
}
