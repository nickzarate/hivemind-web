import React from 'react'
import Parse from 'parse'
// import ParseReact from 'parse-react'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
// import { hammer } from 'toolbox'

export default class ParseDump extends React.Component {
  displayName: 'ParseDump'

  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  componentDidMount() {
    var observationID = 1 + Math.floor(Math.random() * 99)
    var HealthQuestion = Parse.Object.extend('HealthQuestion')
    var query = new Parse.Query(HealthQuestion)
    query.equalTo('observationID', observationID)
    query.first({
      success(response) {
        return response
      },
      error(error) {
        return error
      }
    })
  }

  render() {
    // Render MyComponent
    // ...

    return (
      <div>
        <p>{ 'Parse DUMPpp' }</p>
      </div>
    )
  }
}
