import React from 'react'
import subscribe from 'selectors/loginSelector'
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

export default subscribe(LoginContainer)
