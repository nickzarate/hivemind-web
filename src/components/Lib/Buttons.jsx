import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import styles from 'assets/sass/app.scss'


// Components
export function SubmitButton({ className, children, ...props }) {
  const classes = classNames(className, 'btn btn-primary')

  return (
    <button { ...props } type="submit" className={ classes }>
      { children }
    </button>
  )
}

export function Button({ className, children, ...props }) {
  const classes = classNames(className, 'btn', 'btn-default', styles.btnHive)

  return (
    <button { ...props } type="button" className={ classes }>
      { children }
    </button>
  )
}

export function LinkButton({ className, children, ...props }) {
  const classes = classNames(className, 'btn', 'btn-default', styles.btnHive)

  return (
    <Link { ...props } role="button" className={ classes }>
      { children }
    </Link>
  )
}

