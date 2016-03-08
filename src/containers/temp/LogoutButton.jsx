import React from 'react'
import reduxify from 'store/reduxify'
import { logOut } from 'actions/user'

class LogoutButton extends React.Component {
  handleClick = () => this.props.actions.logOut();

  render() {
    return (
      <button onClick={ this.handleClick }>{ 'Log Out' }</button>
    )
  }
}

export default reduxify({
  actions: { logOut },
  container: LogoutButton
})
