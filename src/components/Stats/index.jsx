import React, { PropTypes } from 'react'
import { roundActions } from 'actions'
import { reduxify } from 'toolbox'

class Stats extends React.Component {
  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  render() {
    console.log(this)
    return (
      <div>
        <p>{ 'Stats page!!' }</p>
        <button onClick={ this.pushPath('/home') }>{ 'Go Home' }</button>
      </div>
    )
  }
}

Stats.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  round: PropTypes.object.isRequired
}

export default reduxify({
  component: Stats,
  reducer: 'round',
  actions: roundActions
})
