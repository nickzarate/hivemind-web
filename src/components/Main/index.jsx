import React from 'react'
import Counter from 'components/Counter'
// import Parse from 'parse'
// import ParseReact from 'parse-react'
// import ParseDump from 'components/ParseDump'

export default class Main extends React.Component {
  displayName: 'Main'
  
  render() {
    console.log(this)
    return (
      <div>
        <h1>{ 'Front Page!!' }</h1>
        <Counter increase={ this.props.actions.increase } value={ this.props.value }>{ 'increase' }</Counter>
      </div>
    )
  }
}
