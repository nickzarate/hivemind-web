import React from 'react'

export default class Selector extends React.Component {
  renderOptions() {
    return this.props.options.map(
      (option) => (
        <option key={ option }>{ option }</option>
      )
    )
  }

  ref = (ref) => this.selector = ref;

  render() {
    return (
      <select ref={ this.ref } name={ this.props.title }>
        { this.renderOptions() }
      </select>
    )
  }
}
