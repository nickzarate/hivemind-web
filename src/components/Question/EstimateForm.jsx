import React from 'react'
import Form from 'components/Lib/Form'

export default class EstimateForm extends React.Component {
  render() {
    return (
      <Form onSubmit={ this.props.onSubmit }>
        <input
          placeholder={ this.props.outcomeName }
          type="number"
        />
        <input type="submit" value="Submit Estimate" />
      </Form>
    )
  }
}
