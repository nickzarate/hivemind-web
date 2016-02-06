import React from 'react'

export default class Question extends React.Component {
  render() {
    const { question, currentCategory, onDeposit } = this.props
    return (
      <div>
        <p>{ 'Bank: ' }{ this.props.question.bank }</p>
        {
          currentCategory.get('binText').map((text, index) =>
            <li key={ index }>
              <button onClick={ onDeposit(index) }>
                { text }{ ': ' }{ question.bins[index] }
              </button>
            </li>
          )
        }
      </div>
    )
  }
}
