import React from 'react'

/* Containers */
import SignupForm from 'containers/SignupForm'
import LoginButton from 'containers/temp/LoginButton'

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>{ 'Sign Up' }</h1>
        <SignupForm />
        <LoginButton />
      </div>
    )
  }
}
