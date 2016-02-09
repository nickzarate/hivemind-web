import React from 'react'
import Form from 'components/Lib/Form'

export default class LoginForm extends React.Component {
  render() {
    return (
      <Form onSubmit={ this.props.onSubmit } ref={ (ref) => this.form = ref } errorMessage={ this.props.errorMessage }>
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
