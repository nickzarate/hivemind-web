import React from 'react'
import { reduxify, merge } from 'toolbox'
import * as answerActions from 'actions/answer'
import * as roundActions from 'actions/round'
import Round from 'components/Round'

class RoundContainer extends React.Component {
  render() {
    return(
      <Round
        actions={ this.props.actions }
        pushPath={ this.props.pushPath }
        round={ this.props.round }
        children={ this.props.children }
      />
    )
  }
}

export default reduxify({
  component: RoundContainer,
  reducer: 'round',
  actions: merge(answerActions, roundActions)
})
