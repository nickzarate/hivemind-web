import React from 'react'
import connect from 'store/connect'
import { logout } from 'reducers/user'

class LogoutButton extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.actions.logout()
  }

  render() {
    return (
      <button onClick={ this.handleClick }>{ 'Log Out' }</button>
    )
  }
}

export default connect({
  actions: { logout }
})(LogoutButton)
