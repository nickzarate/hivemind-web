import React from 'react'
import * as userActions from 'actions/user'
import reduxify from 'toolbox/reduxify'
import Login from 'components/Login'

class LoginContainer extends React.Component {
  render() {
    return (
      <Login
        actions={ this.props.actions }
        push={ this.props.push }
        user={ this.props.user }
      />
    )
  }
}

export default reduxify({
  component: LoginContainer,
  selector: 'user',
  actions: userActions
})
