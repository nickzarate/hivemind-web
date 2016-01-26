import React from 'react'
import subscribe from 'selectors/statsSelector'
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

export default subscribe(StatsContainer)
