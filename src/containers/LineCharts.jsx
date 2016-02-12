import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import lineChartsSelector from 'selectors/lineCharts'
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
    if (!Parse.User.current()) {
      this.props.push('/home')
    }
    this.props.actions.asyncGetPhi()
    this.props.actions.getCovariateData()
    this.props.actions.getData()
  }

  handleSliderChange(chartIndex, sliderIndex) {
    return (value) => {
      this.props.actions.updateCovariateData(chartIndex, sliderIndex, value)
    }
  }

  render() {
    return (
      <LineCharts
        data={ this.props.data }
        onSliderChange={ this.handleSliderChange }
        covariateRanges={ this.props.covariateRanges }
        outcomeRanges={ this.props.outcomeRanges }
      />
    )
  }
}

export default reduxify({
  selector: lineChartsSelector,
  actions: { asyncGetPhi, getData, getCovariateData, updateCovariateData },
  container: LineChartsContainer
})
