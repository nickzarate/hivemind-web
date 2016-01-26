import React from 'react'
import * as userActions from 'actions/user'
import reduxify from 'toolbox/reduxify'
import Signup from 'components/Signup'

class SignupContainer extends React.Component {
  render() {
    return (
      <Signup
        actions={ this.props.actions }
        push={ this.props.push }
        user={ this.props.user }
      />
    )
  }
}

export default reduxify({
  component: SignupContainer,
  reducer: 'user',
  actions: userActions
})
