import React from 'react'
import { Link } from 'react-router'

export default class HomeButton extends React.Component {
  render() {
    return (
      <Link to="/home"><button>{ 'Go Home' }</button></Link>
    )
  }
}
