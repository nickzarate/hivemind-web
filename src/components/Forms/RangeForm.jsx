import React from 'react'
import { Field } from 'react-redux-form'
import { makeNumber } from 'toolbox/parsers'

export default class RangePreview extends React.Component {
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
          />
        </Field>
        <Field
          model={ `ranges.${ this.props.outcomeName }.upper` }
          parser={ makeNumber }
        >
          <input
            type="number"
            placeholder="Upper Bound"
          />
        </Field>
      </form>
    )
  }
}
