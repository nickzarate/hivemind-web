import React from 'react'
import LineChart from 'react-chartist'
import 'chartist/dist/chartist.min.css'
import Sliders from './Sliders'

export default class Graph extends React.Component {

  renderCharts() {
    let options = {
      high: this.props.outcomeRanges[0][1],
      low: this.props.outcomeRanges[0][0],
      showArea: false,
      showPoint: true,
      width: '400px',
      height: '300px'
    }
    return this.props.data.map(
      (item, index) => (
        <li key={ index }>
          <LineChart
            data={ item }
            type={ 'Line' }
            options={ options }
          />
          <Sliders
            numCharts={ this.props.data.length }
            chartIndex={ index }
            covariateRanges={ this.props.covariateRanges }
            onSliderChange={ this.props.onSliderChange }
          />
        </li>
      )
    )
  }

  render() {
    return (
      <ul>
        { this.renderCharts() }
      </ul>
    )
  }
}
