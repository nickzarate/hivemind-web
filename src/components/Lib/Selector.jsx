import React from 'react'

export default class Selector extends React.Component {
  renderOptions() {
    let options = []
    for (let opt of this.props.options) {
      options.push(
        <option key={ opt }>{ opt }</option>
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
