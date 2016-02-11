import React from 'react'
import Form from 'components/lib/Form'

export default class SignupForm extends React.Component {
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
        <input
          placeholder="Confirm Password"
          type="password"
        />
        <input type="submit" value="Sign Up" />
      </Form>
    )
  }
}
