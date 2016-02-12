import React from 'react'
import { showModal } from 'actions/modal'
import AccessButtons from 'components/AccessButtons'
import reduxify from 'toolbox/reduxify'

class AccessButtonsContainer extends React.Component {

  handleLogin = () => this.props.actions.showModal(true);
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
  actions: { showModal },
  container: AccessButtonsContainer
})
