import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import lineChartsSelector from 'selectors/lineCharts'
import { asyncGetPhis, getData, getCovariateData,
  updateCovariateData, setOutcomeIndex, clearWinnings } from 'actions/stats'
import LineCharts from 'components/LineCharts'
import reduxify from 'store/reduxify'

class LineChartsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleSliderChange = this.handleSliderChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    if (!Parse.User.current()) {
      this.props.push('/home')
    }
    this.props.actions.asyncGetPhis()
    this.props.actions.getCovariateData(Parse.User.current())
    this.props.actions.getData()
  }

  componentWillUnmount() {
    this.props.actions.clearWinnings()
  }

  handleSliderChange(chartIndex, sliderIndex) {
    return (value) => {
      this.props.actions.updateCovariateData(chartIndex, sliderIndex, value)
    }
  }

  handleClick(index) {
    return () => {
      this.props.actions.setOutcomeIndex(index)
    }
  }

  render() {
    return (
      <LineCharts
        data={ this.props.data }
        onSliderChange={ this.handleSliderChange }
        covariateRanges={ this.props.covariateRanges }
        outcomeRanges={ this.props.outcomeRanges }
        onClick={ this.handleClick }
        outcomeNames={ this.props.outcomeNames }
        outcomeIndex={ this.props.outcomeIndex }
        covariateData={ this.props.covariateData }
        winnings={ this.props.winnings }
      />
    )
  }
}

export default reduxify({
  selector: lineChartsSelector,
  actions: { asyncGetPhis, getData, getCovariateData,
    updateCovariateData, setOutcomeIndex, clearWinnings },
  container: LineChartsContainer
})
