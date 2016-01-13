import React from 'react'
import * as roundActions from 'actions/round'
import { reduxify } from 'toolbox'
import StatsComp from 'components/Stats'

class Stats extends React.Component {
  render() {
    return (
      <StatsComp
        actions={ this.props.actions }
        pushPath={ this.props.pushPath }
        round={ this.props.round }
      />
    )
  }
}

export default reduxify({
  component: Stats,
  reducer: 'round',
  actions: roundActions
})
