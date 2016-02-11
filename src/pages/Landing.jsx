import React from 'react'

/* Containers */
import AccessButtons from 'containers/AccessButtons'
import LoginModal from 'containers/LoginModal'

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>{ 'Welcome to HiveMind!' }</h1>
        <p>{ '(Some description and picture here)' }</p>
        <AccessButtons />
        <LoginModal />
      </div>
    )
  }
}
