import React from 'react'
import { Field } from 'react-redux-form'

export default class SignupForm extends React.Component {
  render() {
    return (
      <form>
        <Field model="signup.email">
          <input type="email" placeholder="Email" />
        </Field>
        <Field model="signup.password">
          <input type="password" placeholder="Password" />
        </Field>
        <Field model="signup.passwordConfirm">
          <input type="password" placeholder="Confirm Password" />
        </Field>
      </form>
    )
  }
}
