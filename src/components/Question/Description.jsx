import React from 'react'
import Covariates from './Covariates'

export default class Description extends React.Component {
  render() {
    if (this.props.currentCategory) {
      return (
        <div>
          <Covariates
            question={ this.props.question }
            currentCategory={ this.props.currentCategory }
          />
          <p>{ this.props.currentCategory.get('questionInstructions') }</p>
        </div>
      )
    } else { return null }
  }
}
