import React from 'react'
import statsSelector from 'selectors/stats'
import * as statsActions from 'actions/stats'
import Stats from 'components/Stats'
import reduxify from 'toolbox/reduxify'

class StatsContainer extends React.Component {
  render() {
    return (
      <Stats
        actions={ this.props.actions }
        push={ this.props.push }
        stats={ this.props.stats }
        ranges={ this.props.ranges }
      />
    )
  }
}

export default reduxify({
  selector: statsSelector,
  actions: statsActions,
  component: StatsContainer
})
