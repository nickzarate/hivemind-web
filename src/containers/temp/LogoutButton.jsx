import React from 'react'
import connect from 'store/connect'
import { logOut } from 'actions/user'

class LogoutButton extends React.Component {
  handleClick = () => this.props.actions.logOut();

  render() {
    return (
      <button onClick={ this.handleClick }>{ 'Log Out' }</button>
    )
  }
}

export default connect({
  actions: { logOut }
})(LogoutButton)
