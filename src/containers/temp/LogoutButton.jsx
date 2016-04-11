import React from 'react'
import connect from 'store/connect'
import { logout } from 'reducers/user'
import { Button } from 'components/Lib/Buttons'

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
      <div className='row'>
        <Button onClick={ this.handleClick }>{ 'Log Out' }</Button>
      </div>
    )
  }
}

export default connect({
  actions: { logout }
})(LogoutButton)
