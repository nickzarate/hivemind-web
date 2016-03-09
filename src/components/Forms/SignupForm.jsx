import React from 'react'
import { Form, Field } from 'react-redux-form'
import Tooltip from 'components/Lib/Tooltip'

export default class SignupForm extends React.Component {
  render() {
    return (
      <div>
        <Tooltip target={ this[this.props.tooltipTarget] } message={ this.props.tooltipMessage } />
        <Form ref={ (ref) => this.form = ref } onSubmit={ this.props.onSubmit } model="signup">
          <Field model="signup.email" ref={ (ref) => this.email = ref }>
            <input
              type="email"
              placeholder="Email"
            />
          </Field>
          <Field model="signup.password" ref={ (ref) => this.password = ref }>
            <input
              type="password"
              placeholder="Password"
            />
          </Field>
          <Field model="signup.passwordConfirm" ref={ (ref) => this.passwordConfirm = ref }>
            <input
              type="password"
              placeholder="Confirm Password"
            />
          </Field>
          <button type="submit">{ 'Sign Up' }</button>
        </Form>
      </div>
    )
  }
}
