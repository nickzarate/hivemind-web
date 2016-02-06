import { Overlay, Tooltip as TooltipBS } from 'react-bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'

export default class Tooltip extends React.Component {
  static defaultProps = {
    placement: 'top',
    onHide: null
  };

  renderTooltip() {
    let rootClose = this.props.onHide ? true : false
    return (
      <Overlay
        onHide={ () => this.props.onHide() }
        placement={ this.props.placement }
        rootClose={ rootClose }
        show
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
