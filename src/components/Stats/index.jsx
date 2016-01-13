import React from 'react'

export default class Stats extends React.Component {
  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  render() {
    return (
      <div>
        <p>{ 'Stats page!!' }</p>
        <button onClick={ this.pushPath('/home') }>{ 'Go Home' }</button>
      </div>
    )
  }
}
