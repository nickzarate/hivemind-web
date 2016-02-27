import React from 'react'
import { Field } from 'react-redux-form'

export default class LoginModal extends React.Component {
  render() {
    return (
      <form>
        <Field model="login.email">
          <input type="email" placeholder="Email" />
        </Field>
        <Field model="login.password">
          <input type="password" placeholder="Password" />
        </Field>
      </form>
    )
  }
}
