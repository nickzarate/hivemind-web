import React from 'react'
import { reduxify, merge } from 'toolbox'
import * as answerActions from 'actions/answer'
import * as roundActions from 'actions/round'
import Round from 'components/Round'

class RoundContainer extends React.Component {
  render() {
    return(
      <Round
        actions={ merge(this.props.answerActions, this.props.roundActions) }
        pushPath={ this.props.pushPath }
        round={ this.props.round }
        children={ this.props.children }
      />
    )
  }
}

export default reduxify({
  component: RoundContainer,
  state: 'round',
  actions: { answerActions, roundActions }
})
