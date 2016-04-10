import React from 'react'
import classNames from 'classnames'


// Components
export function Logo({ className, ...props }) {
  return (
    <div { ...props } className={ classNames(className, "span12") }>
      <img className="center-block img-responsive" src={ require('assets/images/logo.png') } />
    </div>
  )
}

export function BrandSubtitle({ className, ...props }) {
  return (
    <h2 { ...props } className={ classNames(className, "text-center") }> { 'Measure your perceptions' } </h2>
  )
}
