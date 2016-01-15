import React from 'react'

export default class TestApi extends React.Component {
  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  render() {
    return (
      <div>
        <h1>{ 'Api Test' }</h1>
        <button onClick={ this.props.actions.handleEchoRequest }>{ 'PUSH ME' }</button>
      </div>
    )
  }
}
