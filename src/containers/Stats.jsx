import React from 'react'
import * as roundActions from 'actions/round'
import { reduxify } from 'toolbox'
import Stats from 'components/Stats'

class StatsContainer extends React.Component {
  render() {
    return (
      <Stats
        actions={ this.props.actions }
        pushPath={ this.props.pushPath }
        round={ this.props.round }
      />
    )
  }
}

export default reduxify({
  component: StatsContainer,
  reducer: 'round',
  actions: roundActions
})
