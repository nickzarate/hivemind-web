import React from 'react'
import subscribe from 'selectors/signupSelector'
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

export default subscribe(SignupContainer)
