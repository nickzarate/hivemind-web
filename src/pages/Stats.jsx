import React from 'react'

/* Containers */
import LineCharts from 'containers/LineCharts'
import HomeButton from 'containers/temp/HomeButton'

export default class Stats extends React.Component {
  render() {
    return (
      <div>
        <LineCharts />
        <HomeButton />
      </div>
    )
  }
}
