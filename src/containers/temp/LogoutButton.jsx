import React from 'react'
import reduxify from 'store/reduxify'
import { logout } from 'reducers/user'

class LogoutButton extends React.Component {
  handleClick = () => this.props.actions.logout();

  render() {
    return (
      <button onClick={ this.handleClick }>{ 'Log Out' }</button>
    )
  }
}

export default reduxify({
  actions: { logout },
  container: LogoutButton
})
