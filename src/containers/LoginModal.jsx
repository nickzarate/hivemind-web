import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { show } from 'actions/modal'
import { asyncLogin } from 'actions/user'
import loginModalSelector from 'selectors/loginModal'
import LoginModal from 'components/LoginModal'
import reduxify from 'toolbox/reduxify'

class LoginModalContainer extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    if (Parse.User.current()) {
      this.props.push('/home')
    }
  }

  componentWillUnmount() {
    this.props.actions.show(false)
  }

  handleSubmit = () => this.props.actions.asyncLogin(Parse, this.props.push, this.props.values);
  handleHide = () => this.props.actions.show(false);

  render() {
    return (
      <LoginModal
        show={ this.props.show }
        onSubmit={ this.handleSubmit }
        onHide={ this.handleHide }
      />
    )
  }
}

export default reduxify({
  selector: loginModalSelector,
  actions: { show, asyncLogin },
  container: LoginModalContainer
})
