import React from 'react'
import Form from 'components/Lib/Form'

export default class LoginForm extends React.Component {
  render() {
    return (
      <Form onSubmit={ this.props.onSubmit }>
        <input
          type="email"
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Log In" />
      </Form>
    )
  }
}
