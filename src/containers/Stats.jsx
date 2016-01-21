import React from 'react'
import * as statsActions from 'actions/stats'
import reduxify from 'toolbox/reduxify'
import Stats from 'components/Stats'

class StatsContainer extends React.Component {
  render() {
    return (
      <Stats
        actions={ this.props.statsActions }
        pushPath={ this.props.pushPath }
        stats={ this.props.stats }
      />
    )
  }
}

export default reduxify({
  component: StatsContainer,
  state: 'stats',
  actions: { statsActions }
})
