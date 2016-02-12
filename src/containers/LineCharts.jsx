import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import statsSelector from 'selectors/stats'
import { asyncGetPhi, getData, getCovariateData, updateCovariateData } from 'actions/stats'
import LineCharts from 'components/LineCharts'
import reduxify from 'toolbox/reduxify'

class LineChartsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    if (!Parse.User.current() || !this.props.ranges) {
      this.props.push('/home')
    } else {
      this.props.actions.asyncGetPhi()
      this.props.actions.getCovariateData()
      this.props.actions.getData()
    }
  }

  handleSliderChange(chartIndex, sliderIndex) {
    return (value) => {
      this.props.actions.updateCovariateData(chartIndex, sliderIndex, value)
    }
  }

  render() {
    return (
      <LineCharts
        numCharts={ this.props.stats.covariateData.length }
        data={ this.props.stats.data }
        type={ 'Line' }
        onSliderChange={ this.handleSliderChange }
        ranges={ this.props.ranges }
      />
    )
  }
}

export default reduxify({
  selector: statsSelector,
  actions: { asyncGetPhi, getData, getCovariateData, updateCovariateData },
  container: LineChartsContainer
})
