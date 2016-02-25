import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { showModal } from 'actions/modal'
import { asyncLogin } from 'actions/user'
import { actions } from 'react-redux-form'
import loginModalSelector from 'selectors/loginModal'
import LoginModal from 'components/LoginModal'
import reduxify from 'store/reduxify'

class LoginModalContainer extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleSubmit = () => this.props.actions.asyncLogin(Parse, this.props.push);
  handleHide = () => {
    this.props.actions.showModal(false)
    this.props.actions.reset('login')
  };

  render() {
    return (
      <LoginModal
        show={ this.props.showModal }
        onSubmit={ this.handleSubmit }
        onHide={ this.handleHide }
      />
    )
  }
}

export default reduxify({
  selector: loginModalSelector,
  actions: { showModal, asyncLogin, reset: actions.reset },
  container: LoginModalContainer
})
