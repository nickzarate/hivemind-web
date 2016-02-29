import React from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

export default class Sliders extends React.Component {
  renderSliders() {
    const { covariateRanges, chartIndex } = this.props
    let ranges = covariateRanges.slice(0)
    ranges.splice(chartIndex, 1)
    return ranges.map(
      (range, index) => (
        <li key={ index }>
          <Slider
            onChange={ this.props.onSliderChange(chartIndex, index) }
            max={ range[range.length - 1] }
            min={ range[0] }
            value={ this.props.values[index] }
          />
        </li>
      )
    )
  }

  render() {
    return (
      <ul>
        { this.renderSliders() }
      </ul>
    )
  }
}
