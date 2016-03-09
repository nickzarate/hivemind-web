import React from 'react'
import { showModal } from 'actions/modal'
import AccessButtons from 'components/AccessButtons'
import reduxify from 'store/reduxify'

class AccessButtonsContainer extends React.Component {
  handleLogin = () => this.props.actions.showModal(true);

  render() {
    return (
      <AccessButtons
        onLogin={ this.handleLogin }
      />
    )
  }
}

export default reduxify({
  actions: { showModal },
  container: AccessButtonsContainer
})
