import React from 'react'
import { Form, Field } from 'react-redux-form'
import Tooltip from 'components/Lib/Tooltip'

export default class LoginForm extends React.Component {
  render() {
    const { tooltip } = this.props
    return (
      <div>
        <Tooltip target={ this[tooltip.target] } message={ tooltip.message } />
        <Form ref={ (ref) => this.form = ref } onSubmit={ this.props.onSubmit } model="login">
          <Field model="login.email">
            <input type="email" placeholder="Email" />
          </Field>
          <Field model="login.password">
            <input type="password" placeholder="Password" />
          </Field>
          <button type="submit">{ 'Log In' }</button>
        </Form>
      </div>
    )
  }
}
