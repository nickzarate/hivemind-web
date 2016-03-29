import React from 'react'
import { Link } from 'react-router'

export default class Bins extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    window.localStorage.clear()
  }

  render() {
    return (
      <div>
        <button onClick={ this.props.onLogin }>{ 'Log In' }</button>
        <Link to={ '/signup' }><button>{ 'Sign Up' }</button></Link>
        <button onClick={ this.handleClick }>{ 'Clear Cache' }</button>
      </div>
    )
  }
}
