import { ProgressBar } from 'react-bootstrap'
import React from 'react'


/* Containers */
import SignupModal from 'containers/SignupModal'

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <ProgressBar now={ this.props.children.props.route.path } min={ 0 } max={ this.props.route.childRoutes.length } />
        { this.props.children }
        <SignupModal />
      </div>
    )
  }
}
