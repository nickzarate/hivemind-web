import { Overlay, Tooltip as TooltipBS } from 'react-bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'

export default class Tooltip extends React.Component {
  renderTooltip() {
    var placement
    this.props.placement ? placement = this.props.placement : placement = 'top'
    return (
      <Overlay
        placement={ placement }
        show={ true }
        target={ () => ReactDOM.findDOMNode(this.props.target) }
      >
        <TooltipBS id={ this.props.message }>
          { this.props.message }
        </TooltipBS>
      </Overlay>
    )
  }

  render() {
    if (this.props.message) {
      return (
        <div>
          { this.renderTooltip() }
        </div>
      )
    } else {
      return null
    }
  }
}
