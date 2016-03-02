import React from 'react'
import { Field } from 'react-redux-form'
import Tooltip from 'components/Lib/Tooltip'

export default class LoginForm extends React.Component {
  form = (ref) => this.form = ref;

  render() {
    return (
      <div>
        <Tooltip target={ this[this.props.tooltipTarget] } message={ this.props.tooltipMessage } />
        <form ref={ this.form } onSubmit={ this.props.onSubmit }>
          <Field model="login.email">
            <input type="email" placeholder="Email" />
          </Field>
          <Field model="login.password">
            <input type="password" placeholder="Password" />
          </Field>
          <button type="submit">{ 'Log In' }</button>
        </form>
      </div>
    )
  }
}
