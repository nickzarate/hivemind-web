import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import reduxify from 'toolbox/reduxify'

class LogoutButton extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  handleClick = () => {
    Parse.User.logOut()
    this.props.push('/')
  };

  render() {
    return (
      <button onClick={ this.handleClick }>{ 'Log Out' }</button>
    )
  }
}

export default reduxify({
  actions: {},
  container: LogoutButton
})
