import React from 'react'
import { Link } from 'react-router'

export default class Bins extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ this.props.onLogin }>{ 'Log In' }</button>
        <Link to={ '/signup' }><button>{ 'Sign Up' }</button></Link>
      </div>
    )
  }
}
