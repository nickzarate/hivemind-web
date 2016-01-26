import React from 'react'
import * as statsActions from 'actions/stats'
import reduxify from 'toolbox/reduxify'
import Stats from 'components/Stats'

class StatsContainer extends React.Component {
  render() {
    return (
      <Stats
        actions={ this.props.actions }
        push={ this.props.push }
        stats={ this.props.stats }
      />
    )
  }
}

export default reduxify({
  component: StatsContainer,
  selector: 'stats',
  actions: statsActions
})
