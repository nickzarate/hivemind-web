import React from 'react'
import Form from 'components/Lib/Form'

export default class RangeForm extends React.Component {
  render() {
    return (
      <Form onSubmit={ this.props.onSubmit } errorMessage={ this.props.errorMessage }>
        <input
          placeholder="Lower bound"
          type="number"
        />
        <input
          placeholder="Upper bound"
          type="number"
        />
        <input type="submit" value="Proceed" />
      </Form>
    )
  }
}
