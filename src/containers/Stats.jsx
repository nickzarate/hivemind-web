import React from 'react'
import { roundActions } from 'actions'
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
