import React from 'react'
import { Form, Field } from 'react-redux-form'
import classNames from 'classnames'


// Components
export function InputField({ className, ...props }) {
  return (
    <Field model={this.props.model}>
      <input { ...props } />
    </Field>
  )
}
