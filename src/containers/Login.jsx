import React from 'react'
import { userActions } from 'actions'
import { reduxify } from 'toolbox'
import LoginComp from 'components/Login'

class Login extends React.Component {
  render() {
    return (
      <LoginComp
        actions={ this.props.actions }
        pushPath={ this.props.pushPath }
        user={ this.props.user }
      />
    )
  }
}

export default reduxify({
  component: Login,
  reducer: 'user',
  actions: userActions
})
