import React from 'react'
import connect from 'store/connect'
import { logOut } from 'actions/user'
import { Button } from 'components/Lib/Buttons'

class LogoutButton extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() { this.props.actions.logOut() }

  render() {
    return (
      <div className='row'>
        <Button onClick={ this.handleClick }>{ 'Log Out' }</Button>
      </div>
    )
  }
}

export default connect({
  actions: { logOut }
})(LogoutButton)
