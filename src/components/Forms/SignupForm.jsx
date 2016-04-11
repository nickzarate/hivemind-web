import React from 'react'
import { Form, Field } from 'react-redux-form'
import Tooltip from 'components/Lib/Tooltip'
import { SubmitButton } from 'components/Lib/Buttons'

export default class SignupForm extends React.Component {
  render() {
    const { tooltip } = this.props
    return (
      <div id="SignupForm">
        <Tooltip target={ this[tooltip.target] } message={ tooltip.message } />
        <Form
          ref={ (ref) => this.form = ref }
          onSubmit={ this.props.onSubmit }
          model="signup"
        >
          <Field model="signup.email" ref={ (ref) => this.email = ref }>
            <input type="email" placeholder="Email" />
          </Field>
          <Field model="signup.password" ref={ (ref) => this.password = ref }>
            <input type="password" placeholder="Password" />
          </Field>
          <Field model="signup.passwordConfirm" ref={ (ref) => this.passwordConfirm = ref }>
            <input type="password" placeholder="Confirm Password" />
          </Field>
          <SubmitButton>{ 'Sign Up' }</SubmitButton>
        </Form>
      </div>
    )
  }
}
