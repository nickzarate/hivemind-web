import React from 'react'
import * as statsActions from 'actions/stats'
import { reduxify } from 'toolbox'
import Stats from 'components/Stats'

class StatsContainer extends React.Component {
  render() {
    return (
      <Stats
        actions={ this.props.actions }
        pushPath={ this.props.pushPath }
        stats={ this.props.stats }
      />
    )
  }
}

export default reduxify({
  component: StatsContainer,
  reducer: 'stats',
  actions: statsActions
})
