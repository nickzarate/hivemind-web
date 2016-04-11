import React from 'react'
import { Form, Field } from 'react-redux-form'
import Tooltip from 'components/Lib/Tooltip'
import { SubmitButton } from 'components/Lib/Buttons'

export default class LoginForm extends React.Component {
  render() {
    const { tooltip } = this.props
    return (
      <div className="LoginForm" >
        <Tooltip target={ this[tooltip.target] } message={ tooltip.message } />
        <Form ref={ (ref) => this.form = ref } onSubmit={ this.props.onSubmit } model="login">
          <Field model="login.email">
            <input type="email" placeholder="Email" />
          </Field>
          <Field model="login.password">
            <input type="password" placeholder="Password" />
          </Field>
          <SubmitButton>{ 'Log In' }</SubmitButton>
        </Form>
      </div>
    )
  }
}
