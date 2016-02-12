import React from 'react'
import RoundContainer from 'containers/Round'

export default class Round extends React.Component {
  render() {
    return (
      <div>
        <RoundContainer>
          { this.props.children }
        </RoundContainer>
      </div>
    )
  }
}
