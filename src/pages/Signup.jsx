import React from 'react'

/* Containers */
import SignupModal from 'containers/SignupModal'

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <p>{ 'Progress Bar' }</p>
        { this.props.children }
        <SignupModal />
      </div>
    )
  }
}
