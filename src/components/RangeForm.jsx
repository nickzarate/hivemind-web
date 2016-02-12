import React from 'react'
import InputForm from 'containers/InputForm'

export default class RangeForm extends React.Component {
  render() {
    return (
      <InputForm
        placeholders={ ['Lower bound','Upper bound'] }
        types={ ['number','number'] }
      />
    )
  }
}
