import { Overlay, Tooltip as TooltipBS } from 'react-bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import connect from 'store/connect'
import { resetTooltip } from 'reducers/tooltip'

export default class Tooltip extends React.Component {
  constructor() {
    super()
    this.handleHide = this.handleHide.bind(this)
    this.getTarget = this.getTarget.bind(this)
  }

  componentWillUnmount() {
    this.props.actions.resetTooltip()
  }

  handleHide() {
    this.props.onHide()
  }

  getTarget() {
    ReactDOM.findDOMNode(this.props.target)
  }

  renderTooltip() {
    return (
      <Overlay
        onHide={ this.handleHide }
        placement={ this.props.placement }
        rootClose={ this.props.onHide ? true : false }
        target={ this.getTarget }
        show
      >
        <TooltipBS id={ this.props.message }>
          { this.props.message }
        </TooltipBS>
      </Overlay>
    )
  }

  render() {
    return this.props.message ? this.renderTooltip() : null
  }
}

Tooltip.defaultProps = {
  placement: 'top',
  onHide: null
}

export default connect({
  actions: { resetTooltip }
})(Tooltip)
