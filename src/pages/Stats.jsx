import React from 'react'
import LineCharts from 'containers/LineCharts'

export default class Stats extends React.Component {
  render() {
    return (
      <div>
        <h1>{ 'Stats Page' }</h1>
        <LineCharts />
      </div>
    )
  }
}
