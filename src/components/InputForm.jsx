import React from 'react'
import Tooltip from './lib/Tooltip'

export default class InputForm extends React.Component {
  handleChange(index) {
    return (event) => {
      this.props.onChange(event, index)
    }
  }
  renderInputs() {
    return this.props.types.map(
      (type, index) => (
        <input
          key={ index }
          type={ type }
          placeholder={ this.props.placeholders[index] }
          onChange={ this.handleChange(index) }
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
