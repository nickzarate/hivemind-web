import React from 'react'
import userSelector from 'selectors/user'
import * as userActions from 'actions/user'
import Login from 'components/Login'
import reduxify from 'toolbox/reduxify'

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
  selector: userSelector,
  actions: userActions,
  component: LoginContainer
})
