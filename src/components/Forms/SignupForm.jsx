import React from 'react'
import { Field } from 'react-redux-form'
import Tooltip from 'components/Lib/Tooltip'

export default class SignupForm extends React.Component {
  form = (ref) => this.form = ref;

  render() {
    return (
      <div>
        <Tooltip target={ this[this.props.tooltipTarget] } message={ this.props.tooltipMessage } />
        <form ref={ this.form } onSubmit={ this.props.onSubmit }>
          <Field model="signup.email">
            <input type="email" placeholder="Email" />
          </Field>
          <Field model="signup.password">
            <input type="password" placeholder="Password" />
          </Field>
          <Field model="signup.passwordConfirm">
            <input type="password" placeholder="Confirm Password" />
          </Field>
          <button type="submit">{ 'Sign Up' }</button>
        </form>
      </div>
    )
  }
}
