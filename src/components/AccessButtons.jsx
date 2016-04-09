import React from 'react'
import { Button, LinkButton } from 'components/Lib/Buttons'
import classNames from 'classnames'
import styles from 'assets/sass/app.scss'

export default class Bins extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() { window.localStorage.clear() }

  render() {
    return (
      <div className={ classNames('row', styles.flexJustify) } >
        <Button className={ styles.flexGrow } onClick={ this.props.onLogin }>{ 'Log In' }</Button>
        <LinkButton className={ styles.flexGrow } to={ '/signup' }>{ 'Sign Up' }</LinkButton>
        <Button className={ styles.flexGrow } onClick={ this.handleClick }>{ 'Clear Cache' }</Button>
      </div>
    )
  }
}
