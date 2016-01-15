import React from 'react'
//let LineChart = require('react-d3/linechart').LineChart
import { LineChart } from 'react-d3/linechart'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'
 
export default class LineCharts extends React.Component {
  onSliderChange() {
    console.log('hello')
  }

  renderSliders(chartIndex) {
    let sliders = []
    for (let i = 0; i < this.props.numCharts - 1; i++) {
      sliders.push(
        <li key={ i }>
          <Slider
            ref={ (ref) => this.slider = ref }
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
      charts.push(
        <li key={ i }>
          <LineChart
            //legend={ true }
            data={ this.props.data[i] }
            width={ 500 }
            height={ 300 }
            title="Line Chart"
          />
          <ul ref={ (ref) => this.sliders = ref }>
            { this.renderSliders(i) }
          </ul>
        </li>
      )
    }
    return charts
  }

  render() {
    console.log(this)
    return (
      <ul ref={ (ref) => this.lineCharts = ref }>
        { this.renderCharts() }
      </ul>
    )
  }
}
