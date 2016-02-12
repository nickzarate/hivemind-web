import React from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

export default class Graph extends React.Component {
  render() {
    const { chartIndex, numCharts, covariateRanges } = this.props
    let sliders = []
    let index = 0
    for (let i = 0; i < numCharts - 1; i++) {
      if (chartIndex === i) { index += 1 }
      sliders.push(
        <li key={ i }>
          <Slider
            onChange={ this.props.onSliderChange(chartIndex, i) }
            max={ covariateRanges[index][covariateRanges[index].length - 1] }
            min={ covariateRanges[index][0] }
          />
        </li>
      )
      index += 1
    }

    return (
      <ul>
        { sliders }
      </ul>
    )
  }
}
