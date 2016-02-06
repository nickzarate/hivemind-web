import React from 'react'
import { reduxForm } from 'redux-form'

class EstimateForm extends React.Component {
  render() {
    const { fields: { outcome }, handleSubmit, outcomeName } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        <input
          placeholder={ outcomeName }
          type="number"
          {...outcome}
        />
        <button onClick={ handleSubmit }>{ 'Submit Estimate' }</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'estimate',
  fields: ['outcome']
})(EstimateForm)
