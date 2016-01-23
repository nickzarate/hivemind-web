import React from 'react'
import ChartistGraph from 'react-chartist'
import 'chartist/dist/chartist.min.css'

export default class Graph extends React.Component {
  render() {
    var data = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
      ]
    }

    var options = {
      high: 15,
      low: 0,
      showArea: false,
      showPoint: true
    }

    var type = 'Line'

    return (
      <div>
        <ChartistGraph data={ data } type={ type } />
      </div>
    )
  }
}
