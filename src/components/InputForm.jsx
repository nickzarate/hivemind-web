import React from 'react'
import Tooltip from './lib/Tooltip'

export default class InputForm extends React.Component {
  handleChange(index) {
    return (event) => {
      this.props.onChange(event, index)
    }
  }

  renderInputs() {
    return this.props.values.map(
      (value, index) => (
        <input
          key={ index }
          type={ this.props.types[index] }
          placeholder={ this.props.placeholders[index] }
          onChange={ this.handleChange(index) }
          value={ value }
        />
      )
    )
  }

  render() {
    return (
      <div>
        <Tooltip target={ this.form } message={ this.props.errorMessage } />
        <form ref={ (ref) => this.form = ref }>
          { this.renderInputs() }
        </form>
      </div>
    )
  }
}
