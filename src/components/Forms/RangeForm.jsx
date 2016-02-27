import React from 'react'
import { Field } from 'react-redux-form'
import { makeNumber } from 'toolbox/parsers'

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
            value={ this.props.value.lower }
          />
        </Field>
        <Field
          model={ `ranges.${ this.props.outcomeName }.upper` }
          parser={ makeNumber }
        >
          <input
            type="number"
            placeholder="Upper Bound"
            value={ this.props.value.upper }
          />
        </Field>
      </form>
    )
  }
}
