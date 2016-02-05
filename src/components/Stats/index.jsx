import React from 'react'
import Parse from 'parse'
import LineCharts from './LineCharts'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class Stats extends React.Component {
  constructor(props) {
    super(props)
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  componentDidMount() {
    if (!Parse.User.current() || !this.props.ranges) {
      this.props.push('/home')
    } else {
      this.props.actions.asyncGetPhi()
      this.props.actions.getCovariateData()
      this.props.actions.getData()
    }
  }

  push(path) {
    return () => this.props.push(path)
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
          type={ 'Line' }
          onSliderChange={ this.handleSliderChange }
          ranges={ this.props.ranges }
        />
        <button onClick={ this.push('/home') }>{ 'Go Home' }</button>
      </div>
    )
  }
}
