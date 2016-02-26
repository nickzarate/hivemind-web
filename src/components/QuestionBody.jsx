import React from 'react'
import Bins from 'containers/Bins'
import EstimateForm from './Forms/EstimateForm'

export default class QuestionBody extends React.Component {
  renderBody() {
    return this.props.outcomeNames.map(
      (outcomeName, index) => (
        <li key={ index }>
          <EstimateForm
            outcomeName={ outcomeName }
          />
          <Bins
            binsIndex={ index }
          />
        </li>
      )
    )
  }

  render() {
    return (
      <ul>
        { this.renderBody() }
      </ul>
    )
  }
}
