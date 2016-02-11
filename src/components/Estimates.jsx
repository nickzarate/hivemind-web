import React from 'react'
import Form from './Lib/Form'

export default class Estimates extends React.Component {
  renderOutcomeInputs() {
    return (
      this.props.outcomeNames.map(
        (outcomeName, index) => (
          <input
            key={ index }
            type="number"
            placeholder={ outcomeName }
          />
        )
      )
    )
  }

  render() {
    return (
      <Form onSubmit={ this.props.onSubmit }>
        { this.renderOutcomeInputs() }
        <input type="submit" value="Submit Estimate" />
      </Form>
    )
  }
}
