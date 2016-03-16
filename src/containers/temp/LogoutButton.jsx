import React from 'react'
import reduxify from 'store/reduxify'
import { logoutAsync } from 'reducers/user'

class LogoutButton extends React.Component {
  handleClick = () => this.props.actions.logoutAsync();

  render() {
    return (
      <button onClick={ this.handleClick }>{ 'Log Out' }</button>
    )
  }
}

export default reduxify({
  actions: { logoutAsync },
  container: LogoutButton
})
