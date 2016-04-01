import React from 'react'
import { Form, Field } from 'react-redux-form'
import Tooltip from 'components/Lib/Tooltip'
import { SubmitButton } from 'components/Lib/Buttons'

export default class LoginForm extends React.Component {
  form = (ref) => this.form = ref;

  render() {
    return (
      <div className="LoginForm" >
        <Tooltip target={ this[this.props.tooltipTarget] } message={ this.props.tooltipMessage } />
        <Form ref={ this.form } onSubmit={ this.props.onSubmit } model="login">
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
