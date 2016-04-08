import React from 'react'
import { showModal } from 'reducers/modal'
import AccessButtons from 'components/AccessButtons'
import connect from 'store/connect'

class AccessButtonsContainer extends React.Component {
  constructor() {
    super()
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.props.actions.showModal(true)
  }

  render() {
    return <AccessButtons onLogin={ this.handleLogin } />
  }
}

export default connect({
  actions: { showModal }
})(AccessButtonsContainer)
