import React from 'react'

export default class Bins extends React.Component {
  handleClick(index) {
    if (!this.props.presentational) {
      return () => this.props.onClick(index)
    }
  }

  binValue(index) {
    if (!this.props.presentational) {
      return ': ' + this.props.binValues[index]
    }
  }

  renderBins() {
    return this.props.binText.map(
      (text, index) => (
        <button key={ index } onClick={ this.handleClick(index) }>
          { text }{ this.binValue(index) }
        </button>
      )
    )
  }

  render() {
    return (
      <div>
        <p>{ 'Bank: ' }{ this.props.bank }</p>
        <p>{ 'Worth: ' }{ this.props.worth }</p>
        { this.renderBins() }
      </div>
    )
  }
}
