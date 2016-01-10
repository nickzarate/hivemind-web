import React, { PropTypes } from 'react'
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

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default reduxify({
  component: Login,
  reducer: 'user',
  actions: userActions
})
