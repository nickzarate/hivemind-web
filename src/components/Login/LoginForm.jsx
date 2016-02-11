import React from 'react'
import Form from 'components/lib/Form'

export default class LoginForm extends React.Component {
  render() {
    return (
      <Form onSubmit={ this.props.onSubmit } errorMessage={ this.props.errorMessage }>
        <input
          placeholder="Email"
          type="email"
        />
        <input
          placeholder="Password"
          type="password"
        />
        <input type="submit" value="Log In" />
      </Form>
    )
  }
}
