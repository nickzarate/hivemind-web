import React from 'react'

export default class Selector extends React.Component {
  renderOptions() {
    let options = []
    for (let i in this.props.options) {
      options.push(
        <option key={ i }>{ this.props.options[i] }</option>
      )
    }
    return options
  }

  render() {
    return (
      <select ref={ (ref) => this.selector = ref } name={ this.props.title }>
        { this.renderOptions() }
      </select>
    )
  }
}
