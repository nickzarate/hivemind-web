import React from 'react'
let LineChart = require('react-d3/linechart').LineChart

export default class Stats extends React.Component {
  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  render() {
    return (
      <div>
        <p>{ 'Stats page!!' }</p>
        <LineChart
          legend={ true }
          data={ this.props.stats.lineData }
          width={ 500 }
          height={ 300 }
          title="Line Chart"
        />
        <button onClick={ this.pushPath('/home') }>{ 'Go Home' }</button>
      </div>
    )
  }
}
