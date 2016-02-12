import React from 'react'

/* Containers */
import Instructions from 'containers/Instructions'
import EstimatesForm from 'containers/EstimatesForm'
import Bins from 'containers/Bins'

export default class Question extends React.Component {
  render() {
    return (
      <div>
        <Instructions />
        <EstimatesForm />
        <Bins />
      </div>
    )
  }
}
