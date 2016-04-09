import React from 'react'
import LineChart from 'react-chartist'
import 'chartist/dist/chartist.min.css'
import Sliders from './Sliders'
import { Button } from 'components/Lib/Buttons'

export default class Graph extends React.Component {
  renderCharts() {
    let options = {
      high: this.props.outcomeRanges[this.props.outcomeIndex][1],
      low: this.props.outcomeRanges[this.props.outcomeIndex][0],
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
            values={ this.props.covariateData[index] }
          />
        </li>
      )
    )
  }

  renderButtons() {
    if (this.props.outcomeNames.length > 1) {
      return this.props.outcomeNames.map(
        (outcomeName, index) => (
          <Button key={ index } onClick={ this.props.onClick(index) }>{ outcomeName }</Button>
        )
      )
    }
  }

  render() {
    return (
      <div>
        <h1>{ 'Points Earned: ' }{ this.props.winnings }</h1>
        { this.renderButtons() }
        <ul>
          { this.renderCharts() }
        </ul>
      </div>
    )
  }
}
