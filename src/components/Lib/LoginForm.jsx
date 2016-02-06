import React from 'react'
import { reduxForm } from 'redux-form'

class LoginForm extends React.Component {
  render() {
    const { fields: { email, password }, handleSubmit } = this.props
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
          {...password}
        />
        <button onClick={ handleSubmit }>{ this.props.text }</button>
      </form>
    )
  }
}

LoginForm = reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginForm)

export default LoginForm
