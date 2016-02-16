import React from 'react'
import { handleDeposit } from 'actions/question'
import binsSelector from 'selectors/bins'
import Bins from 'components/Bins'
import reduxify from 'toolbox/reduxify'

class BinsContainer extends React.Component {
  static defaultProps = {
    binsIndex: 0,
    presentational: false
  };

  handleClick = (index) => this.props.actions.handleDeposit(this.props.binsIndex, index);

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

export default reduxify({
  selector: binsSelector,
  actions: { handleDeposit },
  container: BinsContainer
})
