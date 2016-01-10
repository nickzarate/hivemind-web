import React, { PropTypes } from 'react'
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

Stats.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  round: PropTypes.object.isRequired
}

export default reduxify({
  component: Stats,
  reducer: 'round',
  actions: roundActions
})
