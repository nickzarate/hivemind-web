import React from 'react'
import signupSelector from 'selectors/signup'
import * as userActions from 'actions/user'
import Signup from 'components/Signup'
import reduxify from 'toolbox/reduxify'

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
  selector: signupSelector,
  actions: userActions,
  component: SignupContainer
})
