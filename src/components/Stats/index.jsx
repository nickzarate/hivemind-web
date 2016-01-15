import React from 'react'
import LineCharts from './LineCharts'

export default class Stats extends React.Component {
  constructor(props) {
    super(props)
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }
  
  componentWillMount() {
    const { actions } = this.props
    actions.getPhi()
    actions.getCovariateData()
    actions.getData()
    //this.props.actions.analyzeData(0)
  }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  handleSliderChange(chartIndex, sliderIndex) {
    return () => {
      console.log(this.charts)
      console.log(this.charts.sliders)
      console.log('value is:')
      console.log(this.charts.sliders.children[0])
      //console.log(this.sliders.children)
      //this.props.actions.updateCovariateData(chartIndex, sliderIndex, value)
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
          ref={ (ref) => this.charts = ref }
        />
        <p>{ 'k' }</p>
        <button onClick={ this.pushPath('/home') }>{ 'Go Home' }</button>
      </div>
    )
  }
}
