import React from 'react'
import InputForm from 'containers/InputForm'
import Bins from 'containers/Bins'

export default class RangePreview extends React.Component {
  renderForm(index) {
    if (!this.props.discrete[index]) {
      //SKETCHY
      let formIndex = 0
      for (let i = 0; i < index; i++) {
        formIndex += this.props.discrete[i] ? 0 : 1
      }

      return (
        <InputForm
          placeholders={ ['Lower bound','Upper bound'] }
          types={ ['number','number'] }
          formIndex={ formIndex }
          onBlur={ this.props.onBlur }
        />
      )
    }
  }

  renderPreview() {
    return this.props.outcomeNames.map(
      (outcomeName, index) => (
        <li key={ index }>
          { outcomeName }
          { this.renderForm(index) }
          <Bins
            binsIndex={ index }
            presentational
          />
        </li>
      )
    )
  }

  render() {
    return (
      <ul>
        { this.renderPreview() }
      </ul>
    )
  }
}
