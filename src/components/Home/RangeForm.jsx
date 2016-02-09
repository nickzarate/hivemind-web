import React from 'react'
import Form from 'components/Lib/Form'

export default class RangeForm extends React.Component {
  render() {
    const { onSubmit, errorMessage } = this.props
    return (
      <Form onSubmit={ onSubmit } ref={ (ref) => this.form = ref } errorMessage={ errorMessage }>
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
