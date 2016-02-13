import React from 'react'
import { handleDeposit } from 'actions/question'
import binsSelector from 'selectors/bins'
import Bins from 'components/Bins'
import reduxify from 'toolbox/reduxify'

class BinsContainer extends React.Component {

  handleClick = (index) => this.props.actions.handleDeposit(index);

  render() {
    return (
      <Bins
        onClick={ this.handleClick }
        binText={ this.props.binText }
        binValues={ this.props.binValues }
        bank={ this.props.bank }
      />
    )
  }
}

export default reduxify({
  selector: binsSelector,
  actions: { handleDeposit },
  container: BinsContainer
})
