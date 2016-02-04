import React from 'react'

export default class Question extends React.Component {
  renderBins() {
    const { question, currentCategory, onDeposit } = this.props
    if (question.currentQuestion) {
      return currentCategory.get('binText').map(
        (text, index) => (
          <li key={ index }>
            <button onClick={ onDeposit(index) }>
              { text }{ ': ' }{ question.bins[index] }
            </button>
          </li>
        )
      )
    }
  }

  render() {
    return (
      <div>
        { this.renderBins() }
      </div>
    )
  }
}
