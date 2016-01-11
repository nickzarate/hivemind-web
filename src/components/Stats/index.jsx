import React, { PropTypes } from 'react'

export default class StatsComp extends React.Component {
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

StatsComp.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  round: PropTypes.object.isRequired
}
