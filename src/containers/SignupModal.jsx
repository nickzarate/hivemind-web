import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { showModal } from 'actions/modal'
import signupModalSelector from 'selectors/signupModal'
import SignupModal from 'components/SignupModal'
import reduxify from 'store/reduxify'
import { browserHistory } from 'react-router'

class SignupModalContainer extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    this.props.actions.showModal(true)
  }

  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleHide = () => {
    this.props.actions.showModal(false)
    browserHistory.push('/')
  };

  render() {
    return (
      <SignupModal
        show={ this.props.showModal }
        onHide={ this.handleHide }
      />
    )
  }
}

export default reduxify({
  selector: signupModalSelector,
  actions: { showModal },
  container: SignupModalContainer
})
