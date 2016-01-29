import React from 'react'
import LineChart from 'react-chartist'
import 'chartist/dist/chartist.min.css'
import Sliders from './Sliders'

export default class Graph extends React.Component {

  renderCharts() {
    let charts = []
    for (let i = 0; i < this.props.numCharts; i++) {
      let options = {
        high: this.props.ranges.outcomes[0][1],
        low: this.props.ranges.outcomes[0][0],
        showArea: false,
        showPoint: true,
        width: '400px',
        height: '300px'
      }
      charts.push(
        <li key={ i }>
          <LineChart
            data={ this.props.data[i] }
            type={ this.props.type }
            options={ options }
          />
          <Sliders
            numCharts={ this.props.numCharts }
            chartIndex={ i }
            covariateRanges={ this.props.ranges.covariates }
            onSliderChange={ this.props.onSliderChange }
          />
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
