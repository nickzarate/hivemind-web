import React from 'react'
import * as userActions from 'actions/user'
import { reduxify } from 'toolbox'
import SignupComp from 'components/Signup'

class Signup extends React.Component {
  render() {
    return (
      <SignupComp
        actions={ this.props.actions }
        pushPath={ this.props.pushPath }
        user={ this.props.user }
      />
    )
  }
}

export default reduxify({
  component: Signup,
  reducer: 'user',
  actions: userActions
})
