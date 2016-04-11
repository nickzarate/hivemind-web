import React from 'react'
import { Link } from 'react-router'

/* Containers */
import LineCharts from 'containers/LineCharts'

export default class Stats extends React.Component {
  render() {
    return (
      <div>
        <LineCharts />
        <Link to="/home"><button>{ 'Go Home' }</button></Link>
      </div>
    )
  }
}
