import React from 'react'
import reduxify from 'toolbox/reduxify'

class HomeButton extends React.Component {
  handleClick = () => {
    this.props.push('/home')
  };

  render() {
    return (
      <button onClick={ this.handleClick }>{ 'Go Home' }</button>
    )
  }
}

export default reduxify({
  actions: {},
  container: HomeButton
})
