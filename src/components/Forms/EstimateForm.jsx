import React from 'react'
import { Field } from 'react-redux-form'
import { makeNumber } from 'toolbox/parser'

export default class EstimateForm extends React.Component {
  render() {
    return (
      <form>
        <Field
          model={ `estimates.${ this.props.outcomeName }` }
          parser={ makeNumber }
          ref={ (ref) => this.form = ref }
        >
          <input
            type="number"
            placeholder={ this.props.outcomeName }
            value={ this.props.estimates[this.props.outcomeName] }
          />
        </Field>
      </form>
    )
  }
}
