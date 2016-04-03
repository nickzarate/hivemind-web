import React from 'react'

/* Containers */
import AccessButtons from 'containers/AccessButtons'
import LoginModal from 'containers/LoginModal'

/* Components */
export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="span12"><img className="center-block" src={ require('assets/images/logo.png') } /></div> 
        <h1 className="logo">{ 'Welcome to HiveMind!' }</h1>
        <p>{ '(Some description and picture here)' }</p>
        <AccessButtons />
        <LoginModal />
      </div>
    )
  }
}
