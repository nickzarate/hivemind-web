import React from 'react'
import reduxify from 'toolbox/reduxify'

class LoginButton extends React.Component {
  handleClick = () => {
    this.props.push('/')
  };

  render() {
    return (
      <button onClick={ this.handleClick }>{ 'Login' }</button>
    )
  }
}

export default reduxify({
  actions: {},
  container: LoginButton
})
