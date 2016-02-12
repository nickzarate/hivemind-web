import React from 'react'

/* Containers */
import SignupModal from 'containers/SignupModal'

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>{ 'Sign Up' }</h1>
        <p>{ '(Will have survey before signup modal)' }</p>
        <SignupModal />
      </div>
    )
  }
}
