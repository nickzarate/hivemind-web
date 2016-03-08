import React from 'react'
import { Field } from 'react-redux-form'
import { makeNumber } from 'toolbox/parser'

export default class RangeForm extends React.Component {
  render() {
    return (
      <form>
        <Field
          model={ `ranges.${ this.props.outcomeName }.lower` }
          parser={ makeNumber }
        >
          <input
            type="number"
            placeholder="Lower Bound"
            value={ this.props.lowerValue }
          />
        </Field>
        <Field
          model={ `ranges.${ this.props.outcomeName }.upper` }
          parser={ makeNumber }
        >
          <input
            type="number"
            placeholder="Upper Bound"
            value={ this.props.upperValue }
          />
        </Field>
      </form>
    )
  }
}
