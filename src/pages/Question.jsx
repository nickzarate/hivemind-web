import React from 'react'

/* Containers */
import Instructions from 'containers/Instructions'
import Estimates from 'containers/Estimates'
import Bins from 'containers/Bins'

export default class Question extends React.Component {
  render() {
    return (
      <div>
        <Instructions />
        <Estimates />
        <Bins onSubmit={ this.props.onSubmit } />
      </div>
    )
  }
}
