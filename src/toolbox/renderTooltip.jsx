import { Overlay, Tooltip } from 'react-bootstrap'
import React from 'react'

export default function renderTooltip({ message, target }) {
  console.log(message)
  console.log(target)
  let show = false
  if (message) { show = true }
  console.log(show)
  return (
    <Overlay
      placement="top"
      show={ show }
      target={ target }
    >
      <Tooltip id={ message }>
        { message }
      </Tooltip>
    </Overlay>
  )
}
