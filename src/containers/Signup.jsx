import React from 'react'
import * as userActions from 'actions/user'
import { reduxify } from 'toolbox'
import Signup from 'components/Signup'

class SignupContainer extends React.Component {
  render() {
    return (
      <Signup
        actions={ this.props.userActions }
        pushPath={ this.props.pushPath }
        user={ this.props.user }
      />
    )
  }
}

export default reduxify({
  component: SignupContainer,
  state: 'user',
  actions: { userActions }
})
