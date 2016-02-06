import { Overlay, Tooltip } from 'react-bootstrap'
import React from 'react'

export default function renderTooltip({ message, targetDomNode }) {
  let show = false
  if (message) { show = true }
  return (
    <Overlay
      placement="top"
      show={ show }
      target={ targetDomNode }
    >
      <Tooltip id={ message }>
        { message }
      </Tooltip>
    </Overlay>
  )
}
