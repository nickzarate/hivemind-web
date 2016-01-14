import React from 'react'
import * as userActions from 'actions/user'
import { reduxify } from 'toolbox'
import Login from 'components/Login'

class LoginContainer extends React.Component {
  render() {
    return (
      <Login
        actions={ this.props.actions }
        pushPath={ this.props.pushPath }
        user={ this.props.user }
      />
    )
  }
}

export default reduxify({
  component: LoginContainer,
  reducer: 'user',
  actions: userActions
})
