import React from 'react'
import { Form, Field } from 'react-redux-form'
import { toNum } from 'utilities/parser'

export default class RangeForm extends React.Component {
  render() {
    return (
      <Form model="ranges">
        <Field
          model={ `ranges.${ this.props.variableName }.lower` }
          parser={ toNum }
        >
          <input
            type="number"
            placeholder="Lower Bound"
            value={ this.props.lowerValue }
          />
        </Field>
        <Field
          model={ `ranges.${ this.props.variableName }.upper` }
          parser={ toNum }
        >
          <input
            type="number"
            placeholder="Upper Bound"
            value={ this.props.upperValue }
          />
        </Field>
      </Form>
    )
  }
}
