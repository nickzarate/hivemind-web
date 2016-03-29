import React from 'react'
import classNames from 'classnames'


// Components
export function SubmitButton({ className, children, ...props }) {
  const classes = classNames(className, 'btn btn-primary')

  return (
    <button { ...props } type="submit" className={ classes }>
      { children }
    </button>
  )
}
