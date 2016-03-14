import { Overlay, Tooltip as TooltipBS } from 'react-bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'

export default class Tooltip extends React.Component {
  static defaultProps = {
    placement: 'top',
    onHide: null
  };

  handleHide = () => this.props.onHide();
  getTarget = () => ReactDOM.findDOMNode(this.props.target);

  renderTooltip() {
    let rootClose = this.props.onHide ? true : false
    return (
      <Overlay
        onHide={ this.handleHide }
        placement={ this.props.placement }
        rootClose={ rootClose }
        show
        target={ this.getTarget }
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