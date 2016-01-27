import React from 'react'
import roundSelector from 'selectors/round'
import * as roundActions from 'actions/round'
import Round from 'components/Round'
import reduxify from 'toolbox/reduxify'

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
  selector: roundSelector,
  actions: roundActions,
  component: RoundContainer
})
