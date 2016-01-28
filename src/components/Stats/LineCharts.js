import React from 'react'
import LineChart from 'react-chartist'
import 'chartist/dist/chartist.min.css'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

export default class Graph extends React.Component {
  renderSliders(chartIndex) {
    let sliders = []
    let index = 0
    for (let i = 0; i < this.props.numCharts - 1; i++) {
      if (chartIndex === i) { index += 1 }
      console.log(this.props.ranges.covariates)
      sliders.push(
        <li key={ i }>
          <Slider
            key={ i }
            title="SomeTitle"
            onChange={ this.props.onSliderChange(chartIndex, i) }
            max={ this.props.ranges.covariates[index][1] }
            min={ this.props.ranges.covariates[index][0] }
          />
        </li>
      )
      index += 1
    }
    return sliders
  }

  renderCharts() {
    let charts = []
    for (let i = 0; i < this.props.numCharts; i++) {
      let options = {
        high: this.props.ranges.outcomes[0][1],
        low: this.props.ranges.outcomes[0][0],
        showArea: false,
        showPoint: true,
        width: '300px',
        height: '300px'
      }
      charts.push(
        <li key={ i }>
          <LineChart
            data={ this.props.data[i] }
            type={ this.props.type }
            options={ options }
          />
          <ul>
            { this.renderSliders(i) }
          </ul>
        </li>
      )
    }
    return charts
  }

  render() {
    return (
      <ul>
        { this.renderCharts() }
      </ul>
    )
  }
}
