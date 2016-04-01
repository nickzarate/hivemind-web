import React from 'react'
import { handleDeposit } from 'actions/answer'
import { setCorrectAnswerIndices } from 'actions/round'
import binsSelector from 'selectors/bins'
import Bins from 'components/Bins'
import connect from 'store/connect'

class BinsContainer extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.props.actions.setCorrectAnswerIndices(nextProps.correctAnswerIndices)
  }

  handleClick(index) { this.props.actions.handleDeposit(this.props.binsIndex, index) }

  render() {
    const { binTexts, binsIndex } = this.props
    let binText = binsIndex < binTexts.length ? binTexts[binsIndex] : binTexts[0]
    return (
      <Bins
        onClick={ this.handleClick }
        binText={ binText }
        binValues={ this.props.binValues[binsIndex] }
        bank={ this.props.bank[binsIndex] }
        worth={ this.props.worth[binsIndex] }
        presentational={ this.props.presentational }
      />
    )
  }
}

BinsContainer.defaultProps = {
  binsIndex: 0,
  presentational: false
}

export default connect({
  selector: binsSelector,
  actions: { handleDeposit, setCorrectAnswerIndices }
})(BinsContainer)
