import React from 'react'
import { show } from 'actions/modal'
import AccessButtons from 'components/AccessButtons'
import reduxify from 'toolbox/reduxify'

class AccessButtonsContainer extends React.Component {

  handleLogin = () => this.props.actions.show(true);
  handleSignup = () => this.props.push('/signup');

  render() {
    return (
      <AccessButtons
        onLogin={ this.handleLogin }
        onSignup={ this.handleSignup }
      />
    )
  }
}

export default reduxify({
  actions: { show },
  container: AccessButtonsContainer
})
