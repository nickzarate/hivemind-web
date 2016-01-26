import React from 'react'
import subscribe from 'selectors/roundSelector'
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

export default subscribe(RoundContainer)
