import React from 'react'
import LineChart from 'react-chartist'
import 'chartist/dist/chartist.min.css'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

export default class Graph extends React.Component {
  renderSliders(chartIndex) {
    let sliders = []
    for (let i = 0; i < this.props.numCharts - 1; i++) {
      sliders.push(
        <li key={ i }>
          <Slider
            key={ i }
            title="SomeTitle"
            onAfterChange={ this.props.onSliderChange(chartIndex, i) }
          />
        </li>
      )
    }
    return sliders
  }

  renderCharts() {
    let charts = []
    for (let i = 0; i < this.props.numCharts; i++) {
      let options = {
        high: 20,
        low: 0,
        showArea: false,
        showPoint: true
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
