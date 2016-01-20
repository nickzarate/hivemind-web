import React from 'react'
import LineCharts from './LineCharts'

export default class Stats extends React.Component {
  constructor(props) {
    super(props)
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }
  
  componentWillMount() {
    const { actions } = this.props
    actions.asyncGetPhi()
    actions.getCovariateData()
    actions.getData()
  }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  handleSliderChange(chartIndex, sliderIndex) {
    return (value) => {
      this.props.actions.updateCovariateData(chartIndex, sliderIndex, value)
    }
  }

  render() {
    return (
      <div>
        <p>{ 'Stats page!!' }</p>
        <LineCharts
          numCharts={ this.props.stats.covariateData.length }
          data={ this.props.stats.data }
          onSliderChange={ this.handleSliderChange }
        />
        <button onClick={ this.pushPath('/home') }>{ 'Go Home' }</button>
      </div>
    )
  }
}
