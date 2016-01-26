import React from 'react'
import reduxify from 'toolbox/reduxify'
import * as roundActions from 'actions/round'
import Round from 'components/Round'

class RoundContainer extends React.Component {
  render() {
    return(
      <Round
        actions={ this.props.actions }
        push={ this.props.push }
        round={ this.props.round }
        children={ this.props.children }
      />
    )
  }
}

export default reduxify({
  component: RoundContainer,
  reducer: 'round',
  actions: roundActions
})
