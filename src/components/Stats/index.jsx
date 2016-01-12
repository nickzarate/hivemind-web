import React from 'react'

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
