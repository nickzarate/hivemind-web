import React from 'react'
import { reduxForm } from 'redux-form'

class SignupForm extends React.Component {
  render() {
    const { fields: { email, password1, password2 }, handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        <input
          placeholder="Email"
          type="email"
          {...email}
        />
        <input
          placeholder="Password"
          type="password"
          {...password1}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          {...password2}
        />
        <button onClick={ handleSubmit }>{ 'Sign Up' }</button>
      </form>
    )
  }
}

SignupForm = reduxForm({
  form: 'signup',
  fields: ['email', 'password1', 'password2']
})(SignupForm)

export default SignupForm
