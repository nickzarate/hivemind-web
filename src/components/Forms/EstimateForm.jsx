import React from 'react'
import { Field } from 'react-redux-form'
import { makeNumber } from 'toolbox/parsers'

export default class EstimateForm extends React.Component {
  render() {
    return (
      <form>
        <Field
          model={ `estimates.${ this.props.outcomeName }` }
          parser={ makeNumber }
        >
          <input
            type="number"
            placeholder={ this.props.outcomeName }
          />
        </Field>
      </form>
    )
  }
}
