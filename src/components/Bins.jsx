import React from 'react'

export default class Bins extends React.Component {
  handleClick(index) {
    return () => this.props.onClick(index)
  }

  renderBins() {
    return this.props.binText.map(
      (text, index) => (
        <li key={ index }>
          <button onClick={ this.handleClick(index) }>
            { text }{ ': ' }{ this.props.binValues[index] }
          </button>
        </li>
      )
    )
  }

  render() {
    return (
      <div>
        <p>{ 'Bank: ' }{ this.props.bank }</p>
        { this.renderBins() }
      </div>
    )
  }
}
